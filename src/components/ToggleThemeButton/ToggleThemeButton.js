import React from "react";
import * as S from "./ToggleThemeButton.styled";
import { IconContext } from "react-icons";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ToggleThemeButton(props) {
  return (
    <S.Button onClick={props.themeToggler}>
      {props.theme === "dark" ? (
        <IconContext.Provider value={{ color: "#ffeb5b", size: "25px" }}>
          <FiSun />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider
          value={{ color: (props) => props.theme.body, size: "25px" }}
        >
          <FiMoon />
        </IconContext.Provider>
      )}
    </S.Button>
  );
}
