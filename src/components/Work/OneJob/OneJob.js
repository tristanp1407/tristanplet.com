import React from "react";
import * as S from "./OneJob.styled";

export default function OneJob(props) {
  let jobTitle = props.jobTitle;
  let jobDescription = props.jobDescription;

  let marginLeft = props.marginLeft;

  //   let jobTitle = "TEST";
  //   let jobDescription = [
  //     "allez les bleus",
  //     "et 1 et 2 et 3 zero",
  //     "ici c'est paris",
  //   ];

  let renderList = jobDescription.map((item, i) => {
    return (
      <li key={i} value={item}>
        {item}
      </li>
    );
  });

  return (
    <S.Container marginLeft={marginLeft}>
      <S.Title>{jobTitle}</S.Title>
      <S.Text>{renderList}</S.Text>
    </S.Container>
  );
}
