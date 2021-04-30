import React from "react";
import * as S from "./Tile.styled";

export default function Tile(props) {
  const alertMe = () => {
    console.log(props.tools);
  };

  return (
    <S.OneProject>
      <S.Tile href={props.href} target="_blank">
        <S.IMG src={props.image}></S.IMG>
      </S.Tile>
      <S.ProjectInfo>
        <a href={props.href}>
          <S.ProjectTitle>{props.name}</S.ProjectTitle>
        </a>

        <S.ProjectDescription onClick={() => alertMe()}>
          {props.description}
        </S.ProjectDescription>
      </S.ProjectInfo>
      <S.ToolsList>
        {/* {props.tools.map((tool, i) => {
          return (
            <S.ToolPill index={i} backgroundColor={tool.color}>
              {tool.name}
            </S.ToolPill>
          );
        })} */}
      </S.ToolsList>
    </S.OneProject>
  );
}
