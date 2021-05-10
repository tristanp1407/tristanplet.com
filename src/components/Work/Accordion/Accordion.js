import React, { useState } from "react";
import * as S from "./Accordion.styled";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Accordion(props) {
  let jobs = [
    {
      title: "IBM",
      listItems: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    {
      title: "Bulb",
      listItems: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    {
      title: "Proper Mugs",
      listItems: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    {
      title: "T-Shirts",
      listItems: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
  ];

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //close if already active
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider
      value={{ color: (props) => props.theme.fontColor, size: "25px" }}
    >
      <S.Container>
        <S.Wrapper>
          {jobs.map((item, index) => {
            return (
              <>
                <S.Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.title} </h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />} </span>
                </S.Wrap>
                {clicked === index ? (
                  <S.DropDown>
                    {item.listItems.map((listItem, index) => {
                      return <li key={index}>{listItem}</li>;
                    })}
                    <p>{item.description}</p>
                  </S.DropDown>
                ) : null}
              </>
            );
          })}
        </S.Wrapper>
      </S.Container>
    </IconContext.Provider>
  );
}
