import React, { useState } from "react";
import * as S from "./Accordion.styled";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

let Data = [
  { name: "IBM", description: "some text in here" },
  { name: "IBM", description: "some text in here" },
  { name: "IBM", description: "some text in here" },
];

export default function Accordion() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //close if already active
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "white", size: "25px" }}>
      <S.Container>
        <S.Wrapper>
          {Data.map((item, index) => {
            return (
              <>
                <S.Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.name} </h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />} </span>
                </S.Wrap>
                {clicked === index ? (
                  <S.DropDown>
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
