import clouds from "../../assets/png/cloud4.png";
import stars from "../../assets/png/star.png";
import logoDark from "../../assets/png/logowhite.png";
import logoLight from "../../assets/png/logoblack.png";

import { keyframes, css } from "styled-components";

const moveClouds = keyframes`
from {
  background-position: 0 0;
}
to {
  background-position: 100% 0;
}
`;

const animationLightTheme = () =>
  css`
    ${moveClouds} 30s linear infinite alternate;
  `;

export const lightTheme = {
  body: "#87CEEB",
  backgroundImg: clouds,
  animation: animationLightTheme(),
  buttonBackground: "skyblue",
  buttonBorderColor: "darkcyan",
  navbarAndFooterBg: "#FAFAFA",
  logo: logoLight,
  cardAndModalShadow: "9px 9px 8px -1px rgba(87, 155, 201, 1)",
  cardAndModalBackground: "#FAFAFA",
  cardAndModalBorder: "1px solid darkcyan",
  characterNameColor: "skyblue",
  arrowColor: "rgba(87, 155, 201, 1)",
  arrowHoverColor: "darkcyan",
  fallbackBgColor: "skyblue",
  fallbackBorderColor: "black",
  searchIconAndBorderColor: "darkcyan",
  inputText: "darkcyan",
  socialIconsColor: "darkcyan",
  footerTextColor: "darkcyan",
  starsColor: "darkcyan",
};
export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  backgroundImg: stars,
  buttonBackground: "#363537",
  buttonBorderColor: "#ffe549",
  navbarAndFooterBg: "rgb(46, 46, 46)",
  logo: logoDark,
  cardAndModalShadow: "9px 9px 8px -1px rgba(255, 229, 73, 1)",
  cardAndModalBackground: "rgb(46, 46, 46)",
  cardAndModalBorder: "1px solid #ffe549",
  characterNameColor: "#ffe549",
  arrowColor: "#ffe549",
  arrowHoverColor: "orange",
  fallbackBgColor: "#363537",
  fallbackBorderColor: "#ffe549",
  searchIconAndBorderColor: "#ffe549",
  inputText: "#ffe549",
  socialIconsColor: "#ffe549",
  footerTextColor: "#ffe549",
  starsColor: "#ffe549",
};
