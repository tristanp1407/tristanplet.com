import React from "react";
import * as S from "./Work.styled";
import OneJob from "./OneJob/OneJob";

export default function Work() {
  let jobs = {
    job1: {
      title: "Job1",
      listItems: ["allez les bleus", "et 1 et 2 et 3 zero", "ici c'est paris"],
    },
    job2: {
      title: "Job2",
      listItems: ["allez les bleus", "et 1 et 2 et 3 zero", "ici c'est paris"],
    },
    job3: {
      title: "Job3",
      listItems: ["allez les bleus", "et 1 et 2 et 3 zero", "ici c'est paris"],
    },
    job4: {
      title: "Job4",
      listItems: ["allez les bleus", "et 1 et 2 et 3 zero", "ici c'est paris"],
    },
  };

  return (
    <S.Container>
      <OneJob
        marginLeft={"0"}
        jobTitle={jobs.job1.title}
        jobDescription={jobs.job1.listItems}
      />
      <OneJob
        marginLeft={"20vw"}
        jobTitle={jobs.job2.title}
        jobDescription={jobs.job2.listItems}
      />
      <OneJob
        marginLeft={"10vw"}
        jobTitle={jobs.job3.title}
        jobDescription={jobs.job3.listItems}
      />
      <OneJob
        marginLeft={"30vw"}
        jobTitle={jobs.job4.title}
        jobDescription={jobs.job4.listItems}
      />
    </S.Container>
  );
}
