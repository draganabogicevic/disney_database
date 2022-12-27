import React, { useEffect, useState, memo } from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";

import Cards from "../elements/Cards";
import styled from "styled-components";
import CardWrapper from "../elements/CardWrapper";
import SearchBar from "../elements/SearchBar";
import NoCharacters from "../elements/NoCharacters";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../../redux-state/characters/action";
import { get } from "lodash-es";
import { saveBookmarkedToLs } from "../../../redux-state/bookmark/reducer";
import Button from "../elements/Button";
import Loader from "../elements/Loader";
import SingleCard from "../elements/SingleCard";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MainWrapper = styled.main`
  width: 100%;
  padding: 20px;
`;

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [showSearched, setShowSearched] = useState(false);
  const maxNumberOfPagesFromApi = 149;
  const listOfBookmarked = useSelector((state) =>
    get(state, "bookmarkedCharacterIds.bookmarkedCharacterIds")
  );
  const listOfCharactersId = useSelector((state) =>
    Object.keys(get(state, "characters.characters"))
  );
  const listOfSearchedCharactersId = useSelector((state) =>
    Object.keys(get(state, "searchedCharacters.searchedCharacters"))
  );

  const loading = useSelector((state) => state.characters.loading);
  const loadingForSearch = useSelector(
    (state) => state.searchedCharacters.loadingForSearch
  );
  const dispatch = useDispatch();

  const onClickHandler = () => {
    setPage((prev) => prev + 1);
    setSearchText("");
    if (page >= maxNumberOfPagesFromApi) {
      setPage(maxNumberOfPagesFromApi);
    }
    return page;
  };

  const arrowHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [page]);

  useEffect(() => {
    dispatch(saveBookmarkedToLs());
  }, [listOfBookmarked]);

  if (loading || loadingForSearch) {
    return <Loader />;
  }

  console.log(listOfSearchedCharactersId.length);
  return (
    <MainWrapper>
      <SearchBar
        setSearchText={setSearchText}
        searchText={searchText}
        setShowSearched={setShowSearched}
      />
      {!showSearched && (
        <CardWrapper>
          {listOfCharactersId.map((id) => (
            <Cards characterId={id} key={id} isSearched={showSearched} />
          ))}
        </CardWrapper>
      )}
      {showSearched && (
        <CardWrapper>
          {listOfSearchedCharactersId.length > 1 ? (
            listOfSearchedCharactersId.map((id) => (
              <Cards characterId={id} key={id} isSearched={showSearched} />
            ))
          ) : listOfSearchedCharactersId.length === 1 ? (
            <SingleCard characterId={listOfSearchedCharactersId[0]} isSearched={showSearched} />
          ) : (
            <NoCharacters
              setSearchText={setSearchText}
              setShowSearched={setShowSearched}
            />
          )}
        </CardWrapper>
      )}

      <>
        <ButtonWrapper>
          {!showSearched && <Button onClick={onClickHandler}>Load More</Button>}
        </ButtonWrapper>
        <div className="arrowUp">
          <IoChevronUpCircleOutline onClick={arrowHandler} size={40} />
        </div>
      </>
    </MainWrapper>
  );
};

export default memo(HomePage);
