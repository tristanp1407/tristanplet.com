import React from "react";
import * as S from "./NavBar.styled";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";

export default function NavBar(props) {
  return (
    <S.Container>
      <div>tristanplet</div>
      <ToggleThemeButton themeToggler={props.themeToggler} />
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
