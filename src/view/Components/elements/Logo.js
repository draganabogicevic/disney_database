import { Link } from "react-router-dom";

import styled from "styled-components";

const LogoImg = styled.img`
  width: 80px;
`;

const Logo = ({ themeMode }) => {
  return (
    <Link to={"/"}>
      <LogoImg src={themeMode.logo} alt="photo" />
    </Link>
  );
};

export default Logo;
