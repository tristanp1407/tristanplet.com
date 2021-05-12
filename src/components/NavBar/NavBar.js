import React from "react";
import * as S from "./NavBar.styled";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import { Link } from "react-scroll";
import "./scroll-styles.css";

export default function NavBar(props) {
  let menuItems = [
    { name: "projects", to: "projects" },
    { name: "work", to: "work" },
    // { name: "about me", to: "aboutme" },
    { name: "contact", to: "contact" },
  ];

  return (
    <S.Container>
      {/* <S.LinksContainer>
        {menuItems.map((item) => {
          return (
            <li>
              <Link
                className="basenav-item"
                activeClass="active"
                to={item.to}
                spy={true}
                smooth="easeInOutQuad"
                duration={500}
                offset={-150}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </S.LinksContainer> */}
      <ToggleThemeButton
        theme={props.theme}
        themeToggler={props.themeToggler}
      />
    </S.Container>
  );
}
