import React from "react";
import * as S from "./Hello.styled";
import Typewriter from "typewriter-effect";

export default function Hello() {
  return (
    <S.Container>
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello!")
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
        My name is Tristan <br />
        and I'm building this website.
      </h1>
    </S.Container>
  );
}
