import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
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
  .fallbackText {
  max-width: 255px;
  word-wrap: break-word;
  margin-bottom: 12px;
  line-height: 24px;
  position: relative;
  padding: 30px 30px;
  border-radius: 30px;
  background: white;
  color: black;
  align-self: flex-start;
  }
  .fallbackText:before,
  .fallbackText:after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 25px;
    @media (max-width: 370px) {
      display: none;
    }
  }
  .fallbackText:before {
    left: -7px;
    width: 26px;
    background-color: white;
    border-bottom-right-radius: 16px 14px;
  }
  .fallbackText:after {
    left: -26px;
    width: 26px;
    background-color: ${({ theme }) => theme.fallbackBgColor};
    border-bottom-right-radius: 10px;
    @media (max-width: 370px) {
      display: none;
    }
  }
  .fallbackWrapper {
    background-color: ${({ theme }) => theme.fallbackBgColor};
    border: 3px solid ${({ theme }) => theme.fallbackBorderColor};
    @media (max-width: 370px) {
      background-color: transparent;
      border: none;
    }
  }
  .searchIcon {
    color: ${({ theme }) => theme.searchIconAndBorderColor};
    margin-right: 5px;
  }
  .searchInput {
    border-bottom: 1px solid ${({ theme }) => theme.searchIconAndBorderColor};
    color: ${({ theme }) => theme.inputText};
    padding: 5px;
  }
  `;
