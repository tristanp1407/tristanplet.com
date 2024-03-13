import { createGlobalStyle } from "styled-components";

const HIGHLIGHT = "#ECB365";

export const lightTheme = {
  body: "#fbfbff",
  fontColor: "#2f2f2f",
  highlight: HIGHLIGHT,
  backgroundColor: "#2E2541",
};

export const darkTheme = {
  body: "#041C32",
  fontColor: "#f2f2f2",
  highlight: HIGHLIGHT,
};

export const pageWidth = "1200px";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;600&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;700&display=swap'); */

*{
  font-family: 'Rubik', sans-serif !important;
  /* font-family: 'Montserrat', sans-serif; */

}

html {
     background-color: #041C32;
}

body {
   background-color: #041C32;
;
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;600&display=swap');
    font-family: 'Rubik', sans-serif !important;
    font-weight: 300;
    font-size: 1.25rem;

    ::-webkit-scrollbar{
      display: none;
    }
}


`;

export default GlobalStyles;
