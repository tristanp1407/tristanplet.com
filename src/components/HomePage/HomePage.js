import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import * as S from "./HomePage.styled";
import Hello from "../Hello/Hello";
import SectionHeader from "../SectionHeader/SectionHeader";
import Projects from "../Projects/Projects";
import ToolKit from "../ToolKit/ToolKit";
import Work from "../Work/Work";

export default function HomePage(theme) {
  return (
    <ThemeProvider theme={theme}>
      <S.Document>
        <S.Section alignItems={"center"} minHeight={"95vh"}>
          <Hello />
        </S.Section>

        <SectionHeader text={"projects"} />

        <S.Section alignItems={"center"}>
          <Projects />
        </S.Section>

        <S.Section alignItems={"flex-start"} minHeight={"500px"}>
          <ToolKit />
        </S.Section>

        <SectionHeader text={"work"} />

        <S.Section alignItems={"flex-start"}>
          <Work />
        </S.Section>

        <SectionHeader text={"about me"} />
      </S.Document>
    </ThemeProvider>
  );
}
