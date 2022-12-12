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
    width: 100px;
    margin: auto;
    display: flex;
  }
`;

const SearchBar = ({ setSearchText, searchText }) => {
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Wrapper>
      <div className="searchIcon">
        <IoSearch size={20} />
      </div>
      <Input
        type="text"
        className="searchInput"
        value={searchText}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default SearchBar;
