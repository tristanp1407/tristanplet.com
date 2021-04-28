import React from "react";
import * as S from "./SectionHeader.styled";

export default function SectionHeader(props) {
  return <S.Header>{props.text}</S.Header>;
}
