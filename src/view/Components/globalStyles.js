import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Sriracha", cursive;
    transition: all 0.50s linear;
    background-image: url(${({ theme }) => theme.backgroundImg});
    background-repeat: "repeat";
    animation:${({ theme }) => theme.animation};   
  }
  nav {
    background: ${({ theme }) => theme.navbarBg};
  }
  button {
    background: ${({ theme }) => theme.buttonBackground};
    border: 1px solid ${({ theme }) => theme.buttonBorderColor};
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .invisible {
    opacity: 0;
  }
  .card {
    box-shadow: ${({ theme }) => theme.cardShadow};
    background: ${({ theme }) => theme.cardBackground};
    border: ${({ theme }) => theme.cardBorder}
  }
  .characterName {
    text-align: center;
    color:  ${({ theme }) => theme.characterNameColor};
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  .arrowUp {
    width: 82%;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;

  }
  .arrowUp,
  .arrowBack,
  .arrowForward {
    font-size: 30px;
    color:  ${({ theme }) => theme.arrowColor};
    &:hover {
      color: ${({ theme }) => theme.arrowHoverColor};
    }
  }
  `;
