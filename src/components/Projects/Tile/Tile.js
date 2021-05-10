import React from "react";
import * as S from "./Tile.styled";
import { IconContext } from "react-icons";
import { AiOutlineLink } from "react-icons/ai";

export default function Tile(props) {
  let iconColor = (props) => props.theme.fontColor;

  return (
    <IconContext.Provider value={{ color: iconColor, size: "25px" }}>
      <S.OneProject>
        <S.Tile href={props.href} target="_blank">
          <S.IMG src={props.image}></S.IMG>
        </S.Tile>

        <S.ProjectInfo>
          <S.TitleWrapper href={props.href}>
            <S.ProjectTitle>{props.name}</S.ProjectTitle> <AiOutlineLink />
          </S.TitleWrapper>

          <S.ProjectDescription>{props.description}</S.ProjectDescription>
        </S.ProjectInfo>

        <S.ToolsList>
          {props.tools.map((tool, i) => {
            return (
              <S.ToolPill index={i} backgroundColor={tool.color}>
                {tool.name}
              </S.ToolPill>
            );
          })}
        </S.ToolsList>
      </S.OneProject>
    </IconContext.Provider>
  );
}
