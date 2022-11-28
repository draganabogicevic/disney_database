import Logo from "../elements/Logo";

import styled from "styled-components";
import Menu from "../elements/Menu";

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const Navbar = ({ theme, toggleTheme, themeMode }) => {
  return (
    <NavWrapper>
      <Logo themeMode={themeMode} />
      <Menu theme={theme} toggleTheme={toggleTheme} />
    </NavWrapper>
  );
};

export default Navbar;
