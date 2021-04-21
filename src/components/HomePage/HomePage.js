import React from "react";
import { ThemeProvider } from "styled-components";
import * as S from "./HomePage.styled";

export default function HomePage(theme) {
  return (
    <ThemeProvider theme={theme}>
      <S.HomePageWrapper>
        <S.Hello>
          <h1>Hello you little virgin boy.</h1>
        </S.Hello>
      </S.HomePageWrapper>
    </ThemeProvider>
  );
}
