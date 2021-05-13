import React, { useState } from "react";
import * as S from "./Accordion.styled";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import CV from "../../../assets/Tristan_Plet_CV.pdf";

export default function Accordion(props) {
  let jobs = [
    {
      title: "IBM",
      listItems: [
        "As part of my consulting role, I drew insight from client’s application and infrastructure data to support cloud migration strategies.",
        "I attended some really cool technology bootcamps and hackathons, where I learned to apply design thinking and use IBM’s AI and Machine Learning tools to present useful prototypes to clients.",
        "I found my love for styled-components by helping build reusable React components for e-commerce.",
        "As a giveback project, I built the Node backend for a Slack application to automate the process of obtaining manager approval before booking onto a course. Love Slack!",
      ],
    },
    {
      title: "Proper Mugs",
      listItems: [
        "Two of my best friends and I founded Proper Mugs to spread the love of good coffee!  We source, package and ship our favourite coffees to customers across the UK.",
        "I learned to use social media as a marketing tool to generate high volumes of sales, using Adobe Creative Suite to create designs and marketing content.",
        "We’re now learning to roast our own coffee – which is a lot of fun!",
      ],
    },
    {
      title: "Bulb",
      listItems: [
        "I learned tons about the energy sector – and the importance of green energy!",
        "I also learned how CRM tools and Customer Information Systems can be used effectively to deliver a great customer experience.",
        "I managed relationships with third-party engineers and suppliers.",
        "I assisted developers in making UI improvements to internal applications, subsequently improving staff productivity.",
      ],
    },
    {
      title: "Online T-Shirt Business",
      listItems: [
        "To save up for travelling, I individually designed and manufactured t-shirts from home, which I sold online.",
        "I leaerned to use Adobe Illustrator and Photoshop to create designs.",
        "I developed successful marketing strategies, acheiving high volumes of sale.",
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
