import React from "react";
import * as S from "./Hello.styled";
import Typewriter from "typewriter-effect";

export default function Hello() {
  return (
    <S.Container>
      {/* <S.ProfilePhoto>
        <img src={ProfilePhoto} />
      </S.ProfilePhoto> */}
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

      <h2 style={{ maxWidth: 470 }}>
        I'm Tristan, I build digital products for early-stage startups 👋
      </h2>
    </S.Container>
  );
}
