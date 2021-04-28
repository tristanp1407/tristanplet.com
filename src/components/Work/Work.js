import React from "react";
import * as S from "./Work.styled";
import OneJob from "./OneJob/OneJob";

export default function Work() {
  let jobs = {
    job1: {
      title: "IBM",
      listItems: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    job2: {
      title: "Bulb",
      listItems: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    job3: {
      title: "Proper Mugs",
      listItems: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    job4: {
      title: "T-Shirts",
      listItems: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
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
