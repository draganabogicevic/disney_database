import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "./Button";
import Toggler from "./Toggler";

import styled from "styled-components";

const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Menu = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isFavorite = location.pathname === "/favorite";
  const isAbout = location.pathname === "/about";

  return (
    <StyledMenuWrapper>
      {!isHome && (
        <Link to="/">
          <Button>Home</Button>
        </Link>
      )}
      {!isFavorite && (
        <Link to="/favorite">
          <Button>MyFavorites</Button>
        </Link>
      )}
      {!isAbout && (
        <Link to="/about">
          <Button>About</Button>
        </Link>
      )}
      <Toggler theme={theme} toggleTheme={toggleTheme} />
    </StyledMenuWrapper>
  );
};

export default Menu;
