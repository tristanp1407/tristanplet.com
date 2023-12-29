import React from "react";
import { ThemeProvider } from "styled-components";
import * as S from "./HomePage.styled";
import Hello from "../Hello/Hello";
import SectionHeader from "../SectionHeader/SectionHeader";
import Projects from "../Projects/Projects";
import ToolKit from "../ToolKit/ToolKit";
import AboutMe from "../AboutMe/AboutMe";
import Accordion from "../Work/Accordion/Accordion";
import Contact from "../Contact/Contact";

export default function HomePage(theme) {
  return (
    <ThemeProvider theme={theme}>
      <S.Document>
        <S.Section alignItems={"center"} minHeight={"95vh"}>
          <Hello />
        </S.Section>

        <SectionHeader text={"Some things I've built"} />

        <S.Section id={"projects"} alignItems={"center"}>
          <Projects />
        </S.Section>

        {/* <S.Section alignItems={"flex-start"} minHeight={"500px"}>
          <ToolKit />
        </S.Section> */}

        {/* <SectionHeader text={"where I've worked"} />

        <S.Section id={"work"} alignItems={"flex-start"}>
          <Accordion />
        </S.Section> */}

        <SectionHeader text={"About me"} />

        <S.Section id={"aboutme"} alignItems="center">
          <AboutMe />
        </S.Section>

        <SectionHeader text={"Say hello"} />

        <S.Section id={"contact"} minHeight={"10vh"}>
          <Contact />
        </S.Section>
      </S.Document>
    </ThemeProvider>
  );
}
