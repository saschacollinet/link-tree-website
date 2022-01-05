import { createGlobalStyle } from "styled-components";
import Background from "./assets/images/lucas-benjamin-wQLAGv4_OYs-unsplash.jpg";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-family: Montserrat, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GlobalStyles;
