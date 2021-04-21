import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#1E1E1E",
};

export const darkTheme = {
  body: "#272B2F",
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
