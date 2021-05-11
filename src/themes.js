import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#2f2f2f",
  backgroundColor: "#2E2541",
};

export const darkTheme = {
  // backgroundColor: "#101313",
  // backgroundColor: "#181A24",
  // backgroudColor: "#17101A",
  body: "#181A24",
  fontColor: "#f2f2f2",
};

export const pageWidth = "1200px";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;600&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;700&display=swap'); */

*{
  font-family: 'Rubik', sans-serif !important;
  /* font-family: 'Montserrat', sans-serif; */

}

body{
    background-color: ${(props) => props.theme.body};
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;600&display=swap');
    font-family: 'Rubik', sans-serif !important;
    font-weight: 300;
    font-size: 1.25rem;
}


`;

export default GlobalStyles;
