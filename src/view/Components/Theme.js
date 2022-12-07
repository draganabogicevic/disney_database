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
  navbarBg: "#FAFAFA",
  logo: logoLight,
  cardShadow: "9px 9px 8px -1px rgba(87, 155, 201, 1)",
  cardBackground: "#FAFAFA",
  cardBorder: "1px solid darkcyan",
  characterNameColor: "skyblue",
  arrowColor: "rgba(87, 155, 201, 1)",
  arrowHoverColor: "darkcyan",
  fallbackBgColor: "skyblue",
  fallbackBorderColor: "black",
};
export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  backgroundImg: stars,
  buttonBackground: "#363537",
  buttonBorderColor: "#ffe549",
  navbarBg: "rgb(46, 46, 46)",
  logo: logoDark,
  cardShadow: "9px 9px 8px -1px rgba(255, 229, 73, 1)",
  cardBackground: "rgb(46, 46, 46)",
  cardBorder: "1px solid #ffe549",
  characterNameColor: "#ffe549",
  arrowColor: "#ffe549",
  arrowHoverColor: "orange",
  fallbackBgColor: "#363537",
  fallbackBorderColor: "#ffe549",
};
