import React from "react";
import * as S from "./NavBar.styled";

export default function NavBar() {
  return (
    <S.Container>
      <div>tristanplet</div>
      <div>
        <S.LinksContainer>
          <li>work</li>
          <li>project</li>
          <li>life</li>
          <li>contact</li>
        </S.LinksContainer>
      </div>
    </S.Container>
  );
}
