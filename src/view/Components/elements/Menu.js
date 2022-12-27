import { Link } from "react-router-dom";

import Button from "./Button";
import Toggler from "./Toggler";

import styled from "styled-components";

const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Menu = ({ theme, toggleTheme }) => {
  return (
    <StyledMenuWrapper>
      <Link to="/favorite">
        <Button>MyFavorites</Button>
      </Link>
      <Link to="/about">
        <Button>About</Button>
      </Link>
      <Toggler theme={theme} toggleTheme={toggleTheme} />
    </StyledMenuWrapper>
  );
};

export default Menu;
