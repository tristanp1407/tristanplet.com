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
          <li>CSS</li>
        </S.UL>
        <S.UL>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Lightroom</li>
          <li>SQL</li>
          <li>Design Thinking</li>
          <li>AWS Route 53</li>
        </S.UL>
        <S.UL>
          <li>AWS EC2</li>
          <li>AWS S3</li>
          <li>Sanity</li> <li>Netlify</li>
        </S.UL>
      </S.ListsWrapper>
    </S.Container>
  );
}
