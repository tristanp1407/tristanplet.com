import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "black",
};

export const darkTheme = {
  body: "black",
  fontColor: "white",
};

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;600&display=swap');

body{
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
}


`;

export default GlobalStyles;
