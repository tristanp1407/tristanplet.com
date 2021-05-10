import React from "react";
import * as S from "./Hello.styled";
import Typewriter from "typewriter-effect";

export default function Hello() {
  return (
    <S.Container>
      <S.TypewriterWrapper>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hey!")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Salut!")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Hola!")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Ciao!")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Hello!")
              .start();
          }}
        />
      </S.TypewriterWrapper>

      <h1>
        I'm Tristan,
        <br />a self-taught web developer from London.
      </h1>
    </S.Container>
  );
}
