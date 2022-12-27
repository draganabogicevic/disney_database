import { useState, useEffect } from "react";
//import { isMobile } from "react-device-detect";

import Logo from "../elements/Logo";
import Menu from "../elements/Menu";
import Drawer from "../elements/Drawer";

import styled from "styled-components";

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const Navbar = ({ theme, toggleTheme, themeMode }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      {!isMobile && (
        <NavWrapper>
          <Logo themeMode={themeMode} />
          <Menu theme={theme} toggleTheme={toggleTheme} />
        </NavWrapper>
      )}
      {isMobile && (
        <Drawer themeMode={themeMode} theme={theme} toggleTheme={toggleTheme} />
      )}
    </>
  );
};

export default Navbar;
