import React, { useEffect, useState, memo, useContext, useRef } from "react";
import {
  fetchAllCharacters,
  fetchAllCharactersByPages,
} from "../../../service/api";
import {
  IoChevronUpCircleOutline,
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

import Character from "../../../entities/Character";
import CharacterCard from "../elements/CharacterCard";
import styled from "styled-components";
import BookmarkContext from "../../../context/bookmarkContext";
import CardWrapper from "../elements/CardWrapper";
import SearchBar from "../elements/SearchBar";
import SingleCharacterCard from "../elements/SingleCharacterCard";
import NoCharacters from "../elements/NoCharacters";

const ControlPrev = styled.div`
  position: fixed;
  top: 50%;
  left: 10px;
  z-index: 10;
  transform: translate(0%, -50%);
  padding-right: 10px;
  @media (min-width: 1000px) {
    left: 50px;
  }
`;
const ControlNext = styled.div`
  position: fixed;
  top: 50%;
  right: 10px;
  z-index: 10;
  transform: translate(0%, -50%);
  padding-left: 10px;
  @media (min-width: 1000px) {
    right: 50px;
  }
`;

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [charactersToShow, setCharactersToShow] = useState([]);
  const { bookmarkedCharacters } = useContext(BookmarkContext);

  const buttonPrevHandler = () => {
    setPage((prev) => prev - 1);
    setSearchText("");
    if (page <= 1) {
      setPage(1);
    }
  };
  const buttonNextHandler = () => {
    setPage((prev) => prev + 1);
    setSearchText("");
    if (page >= 149) {
      setPage(149);
    }
    return page;
  };

  const arrowHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (searchText !== "") {
      fetchAllCharacters(searchText).then((data) => {
        const dataToSave = data.map((c) => new Character(c));
        if (bookmarkedCharacters) {
          bookmarkedCharacters.map((item) => {
            dataToSave.map((c) => {
              if (c.id === item.id) {
                c.toggleBookmark();
              }
              return null;
            });
            return null;
          });
        }
        setCharactersToShow(dataToSave.slice(0, 50));
      });
    }
  }, [searchText]);

  useEffect(() => {
    fetchAllCharactersByPages(page).then((data) => {
      const dataToSave = data.map((c) => new Character(c));
      if (bookmarkedCharacters) {
        bookmarkedCharacters.map((item) => {
          if (dataToSave.id === item.id) {
            dataToSave.toggleBookmark();
          }
          return null;
        });
      }

      setCharactersToShow(dataToSave);
    });
  }, [page]);

  console.log(searchText);

  return (
    <>
      <ControlPrev>
        <IoChevronBackCircleOutline
          onClick={buttonPrevHandler}
          className="arrowBack"
        />
      </ControlPrev>
      <ControlNext>
        <IoChevronForwardCircleOutline
          onClick={buttonNextHandler}
          className="arrowForward"
        />
      </ControlNext>
      <SearchBar setSearchText={setSearchText} searchText={searchText} />
      <CardWrapper>
        {charactersToShow.length > 1 ? (
          charactersToShow.map((c) => (
            <CharacterCard character={c} key={c.id} />
          ))
        ) : charactersToShow.length === 1 ? (
          <SingleCharacterCard character={charactersToShow[0]} />
        ) : (
          <NoCharacters setSearchText={setSearchText} />
        )}
      </CardWrapper>
      <div className="arrowUp">
        <IoChevronUpCircleOutline onClick={arrowHandler} size={40} />
      </div>
    </>
  );
};

export default memo(HomePage);
