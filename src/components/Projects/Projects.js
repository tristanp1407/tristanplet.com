import React from "react";
import * as S from "./Projects.styles";
import Tile from "./Tile/Tile";

import MPKLogo from "../../assets/images/mpk_logo.png";
import FeralTripLogo from "../../assets/images/feraltrip_logo.png";
import CardLogo from "../../assets/images/card_logo.jpeg";
import SmallSipsLogo from "../../assets/images/cocktail.png";
import SlackLogo from "../../assets/images/slack.png";

export default function Projects() {
  let projects = [
    {
      name: "My Persian Kitchen",
      description:
        "A description of the website will go here, explain what it does and how extremely useful it is.",
      image: MPKLogo,
      link: "https://mypersiankitchen.co.uk/",
      tools: [
        { name: "React", color: "lightblue" },
        { name: "Sanity", color: "red" },
      ],
    },
    {
      name: "Feral Trip",
      description:
        "A description of the website will go here, explain what it does and how extremely useful it is.",
      image: FeralTripLogo,
      link: "https://feraltrip.com/",
      tools: [
        { name: "React", color: "lightpink" },
        { name: "MapBox", color: "blue" },
      ],
    },
    {
      name: "Cardy B",
      description:
        "A description of the website will go here, explain what it does and how extremely useful it is.",
      image: CardLogo,
      link: "https://cardy-b.netlify.app/",
      tools: [
        { name: "React", color: "lightpink" },
        { name: "MapBox", color: "blue" },
      ],
    },
    {
      name: "SmallSips",
      description:
        "A description of the website will go here, explain what it does and how extremely useful it is.",
      image: SmallSipsLogo,
      link: "https://smallsips.netlify.app/",
      tools: [
        { name: "React", color: "lightpink" },
        { name: "MapBox", color: "blue" },
      ],
    },
    {
      name: "BookerBee",
      description:
        "A description of the website will go here, explain what it does and how extremely useful it is.",
      image: SlackLogo,
      link: "https://slack.com/",
      tools: [
        { name: "React", color: "lightpink" },
        { name: "MapBox", color: "blue" },
      ],
    },
  ];

  return (
    <S.Container>
      {projects.map((project, i) => {
        return (
          <Tile
            index={i}
            image={project.image}
            href={project.link}
            name={project.name}
            description={project.description}
            tools={project.tools}
          />
        );
      })}
    </S.Container>
  );
}
