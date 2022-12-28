import { useEffect, useMemo, useState } from "react";

import { useDispatch } from "react-redux";
import { getSearchedCharacters } from "../../../redux-state/search/reducer";
import { debounce } from "lodash-es";
import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

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

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 1000);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  useEffect(() => {
    if (query) {
      dispatch(getSearchedCharacters(query));
      setShowSearched(true);
    } else {
      setQuery("");
      setSearchText("");
      setShowSearched(false);
    }
  }, [query]);

  return (
    <Wrapper>
      <div className="search">
        <IoSearch size={20} />
        <Input
          type="text"
          className="searchInput"
          onChange={debouncedResults}
        />
      </div>
      {/* <Button onClick={onSearchHandler}>Search</Button> */}
      {/* <Button onClick={onClearHandler}>Clear</Button> */}
    </Wrapper>
  );
};

export default SearchBar;
