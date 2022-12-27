import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchedCharacters } from "../../../redux-state/search/reducer";

import { IoSearch } from "react-icons/io5";
import styled from "styled-components";
import Button from "./Button";

const Input = styled.input`
  border: none;
  background: none;
`;

const Wrapper = styled.div`
  width: 30%;
  margin: auto;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  @media (max-width: 370px) {
    width: 200px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
`;

const SearchBar = ({ setSearchText, searchText, setShowSearched }) => {
  const [query, setQuery] = useState();

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchText(event.target.value);
    setQuery(event.target.value);
  };

  const onSearchHandler = () => {
    if (query) {
      dispatch(getSearchedCharacters(query));
      setShowSearched(true);
    }
  };
  const onClearHandler = () => {
    setQuery("");
    setSearchText("");
    setShowSearched(false);
  };

  return (
    <Wrapper>
      <div className="search">
        <IoSearch size={20} />
        <Input
          type="text"
          className="searchInput"
          value={searchText}
          onChange={handleChange}
        />
      </div>
      <Button onClick={onSearchHandler}>Search</Button>
      <Button onClick={onClearHandler}>Clear</Button>
    </Wrapper>
  );
};

export default SearchBar;
