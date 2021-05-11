import React from "react";
import * as S from "./ToggleThemeButton.styled";
import { IconContext } from "react-icons";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ToggleThemeButton(props) {
  return (
    <S.Button onClick={props.themeToggler}>
      {props.theme === "dark" ? (
        <IconContext.Provider value={{ color: "#ffeb5b", size: "25px" }}>
          <FaSun />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider
          value={{ color: (props) => props.theme.body, size: "25px" }}
        >
          <FaMoon />
        </IconContext.Provider>
      )}
    </S.Button>
  );
}
