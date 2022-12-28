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
  nav, 
  footer {
    background: ${({ theme }) => theme.navbarAndFooterBg};
  }

  footer {
    position: fixed;
    bottom: 0;
    padding: 20px 20px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
    color: ${({ theme }) => theme.footerTextColor};
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
    box-shadow: ${({ theme }) => theme.cardAndModalShadow};
    background: ${({ theme }) => theme.cardAndModalBackground};
    border: ${({ theme }) => theme.cardAndModalBorder}
  }
  .bigCard {
    display: flex;
    justify-content: center;
    margin-bottom: 150px;
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
    font-size: 30px;
    margin-bottom: 120px;
    color:  ${({ theme }) => theme.arrowColor};
    &:hover {
      color: ${({ theme }) => theme.arrowHoverColor};
    }
  }
  .filmsWrapper {
    margin-bottom: 20px;
  }

  #buttonForRate {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .on {
    color: ${({ theme }) => theme.searchIconAndBorderColor};
  }
  .off {
    color: #ccc;
  }
  .rateText {
    margin: 0;
    padding: 0;
  }

  .star {
    font-size: 30px;
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
  .search {
    color: ${({ theme }) => theme.searchIconAndBorderColor};
    margin-right: 10px;
    display: flex;
    flex-direction:row;
    @media (max-width: 370px) {
      margin-bottom: 10px;
    }
  }
  .searchInput {
    border-bottom: 1px solid ${({ theme }) => theme.searchIconAndBorderColor};
    color: ${({ theme }) => theme.inputText};
    padding: 5px;
  }

  .socialNetworks {
    max-width: 60%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px; 
    color: ${({ theme }) => theme.footerTextColor};
    a {
      margin: 10px;
      color: ${({ theme }) => theme.socialIconsColor};
    }
    a:hover {
      opacity: 0.5;
    }
    @media (max-width: 556px) {
      max-width: 100%;
      padding: 0 20px;
      flex-direction: column;
    }
  }
  .socialLinks {
    display: flex;

  }
  .modalWrapper {
    background-color: ${({ theme }) => theme.cardAndModalBackground};
    border: ${({ theme }) => theme.cardAndModalBorder};
    box-shadow: ${({ theme }) => theme.cardAndModalShadow};
  }
  .modalRateAndButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }

  .aboutWrapper {
    width: 80%;
    margin: 50px auto 200px auto;
    padding-bottom: 200px;
  }
  .reportWrapper {
    padding: 30px;
    background-color: ${({ theme }) => theme.cardAndModalBackground};
    border: ${({ theme }) => theme.cardAndModalBorder};
    box-shadow: ${({ theme }) => theme.cardAndModalShadow};
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .link {
    color: ${({ theme }) => theme.socialIconsColor};
  }
  .link:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  .favWrapper {
    padding-top: 30px;
    padding-bottom: 150px;
    @media (max-width: 556px) {
      padding-bottom: 250px;
    }
  }
  .drawer {
    background-color: ${({ theme }) => theme.cardAndModalBackground};
  }
  `;
