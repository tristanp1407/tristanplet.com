import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import * as S from "./HomePage.styled";
import SectionHeader from "../SectionHeader/SectionHeader";
import Projects from "../Projects/Projects";
import Work from "../Work/Work";

export default function HomePage(theme) {
  return (
    <ThemeProvider theme={theme}>
      <S.Document>
        <S.Section alignItems={"center"}>
          <S.Hello>
            <h1>
              Hello! <br />
              My name is Tristan <br />
              and I'm building this website.
            </h1>
          </S.Hello>
        </S.Section>

        <SectionHeader text={"projects"} />

        <S.Section alignItems={"center"}>
          <Projects />
        </S.Section>

        <SectionHeader text={"work"} />

        <S.Section alignItems={"flex-start"}>
          <Work />
        </S.Section>
      </S.Document>
    </ThemeProvider>
  );
}
