import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#1E1E1E",
  backgroundColor: "#2E2541",
  pageColor: "white",
};

export const darkTheme = {
  // backgroundColor: "#101313",
  backgroundColor: "#181A24",
  // backgroudColor: "#17101A",
  body: "#181A24",
  fontColor: "#f2f2f2",
};

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;600&display=swap');

body{
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
}


`;

export default GlobalStyles;
