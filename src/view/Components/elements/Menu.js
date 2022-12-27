import { useState } from "react";
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
  const [showHomeButton, setShowHomeButton] = useState(false);

  const rendeHomeButton = () => {
    setShowHomeButton(true);
  };

  const renderFavButton = () => {
    setShowHomeButton(false);
  };

  return (
    <StyledMenuWrapper>
      {showHomeButton && (
        <Link to="/">
          <Button onClick={renderFavButton}>Home</Button>
        </Link>
      )}
      {!showHomeButton && (
        <Link to="/favorite">
          <Button onClick={rendeHomeButton}>MyFavorites</Button>
        </Link>
      )}
      <Link to="/about">
        <Button>About</Button>
      </Link>
      <Toggler theme={theme} toggleTheme={toggleTheme} />
    </StyledMenuWrapper>
  );
};

export default Menu;
