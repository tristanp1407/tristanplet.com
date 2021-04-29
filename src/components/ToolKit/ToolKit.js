import React from "react";
import * as S from "./ToolKit.styled";

export default function ToolKit() {
  return (
    <S.Container>
      <h2>Tools/years</h2>
      <S.ListsWrapper>
        <S.UL>
          <li>Javascript</li>
          <li>React</li>
          <li>Vue</li>
          <li>Node</li>
          <li>HTML</li>
        </S.UL>
        <S.UL>
          <li>CSS</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Lightroom</li>
          <li>SQL</li>
        </S.UL>
        <S.UL>
          <li>Design Thinking</li>
          <li>AWS</li>
        </S.UL>
      </S.ListsWrapper>
    </S.Container>
  );
}
