import React from "react";
import * as S from "./ToggleThemeButton.styled";

export default function ToggleThemeButton(props) {
  return <S.Button onClick={props.themeToggler}>Toggle</S.Button>;
}
