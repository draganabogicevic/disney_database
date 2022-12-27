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

  .arrowUp {
    margin-bottom: 120px;
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
    aligne-items: center;
    padding-bottom: 10px;
  }
  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .aboutWrapper {
    width: 80%;
    margin: 50px auto 200px auto;
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
  }
  `;
