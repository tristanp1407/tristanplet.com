import React from "react";
import * as S from "./ToolKit.styled";
import { IconContext } from "react-icons";
import { RiToolsLine } from "react-icons/ri";

export default function ToolKit(props) {
  let tools = [
    "Javascript",
    "React",
    "Vue",
    "Node",
    "HTML",
    "CSS",
    "Tekton",
    "Terraform",
    "GitHub",
    "Docker",
    "Slack",
    "Red Hat OpenShift",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Lightroom",
    "SQL",
    "MongoDB",
    "Design Thinking",
    "Agile",
    "AWS",
    "Sanity",
    "Netlify",
  ];

  return (
    <S.Container>
      <S.Title>Toolkit</S.Title>

      <S.UL>
        {tools.map((tool, i) => {
          return (
            <S.OneTool>
              <IconContext.Provider
                value={{
                  size: "25px",
                  color: (props) => props.theme.fontColor,
                }}
              >
                <li key={i}>{tool}</li>
                <div>
                  <RiToolsLine />
                </div>
              </IconContext.Provider>
            </S.OneTool>
          );
        })}
      </S.UL>
    </S.Container>
  );
}
