import React from "react";
import { IconContext } from "react-icons";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import * as S from "./Contact.styled";

export default function Contact(props) {
  const openMe = (link) => {
    window.open(link, "_blank");
  };

  return (
    <IconContext.Provider
      value={{ color: (props) => props.theme.fontColor, size: "50px" }}
    >
      <S.Wrapper>
        <S.OneLink onClick={() => openMe("https://github.com/tristanp1407")}>
          <RiGithubFill />
        </S.OneLink>
        <S.OneLink
          onClick={() => openMe("https://www.linkedin.com/in/tristan-plet")}
        >
          <RiLinkedinBoxFill />
        </S.OneLink>
        <S.OneLink href="mailto:tristan.plet@gmail.com">
          <HiOutlineMail />
        </S.OneLink>
      </S.Wrapper>
    </IconContext.Provider>
  );
}
