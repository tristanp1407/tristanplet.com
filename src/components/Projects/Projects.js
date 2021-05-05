import React from "react";
import * as S from "./Projects.styles";
import Tile from "./Tile/Tile";

import MPKLogo from "../../assets/images/mpk_logo.png";
import FeralTripLogo from "../../assets/images/feraltrip_logo.png";
import CardLogo from "../../assets/images/card_logo.jpeg";
import SmallSipsLogo from "../../assets/images/cocktail.png";
import SlackLogo from "../../assets/images/slack.png";

export default function Projects() {
  let tools = {
    react: { name: "React", color: "#5FD3F3" },
    sanity: { name: "Sanity", color: "#EF3F2E" },
    mapbox: { name: "MapBox", color: "#0575E0" },
    javascript: { name: "Javascript", color: "#c4b01d" },
    vue: { name: "Vue", color: "#3FB983" },
    css: { name: "CSS", color: "#563E7C" },
    node: { name: "Node", color: "#3E863C" },
    html: { name: "HTML", color: "#E34C25" },
    styledComponents: { name: "Styled Components", color: "#DA7192" },
    axios: { name: "Axios", color: "#3B6BE2" },
    slack: { name: "Slack", color: "#601F69" },
  };

  let projects = [
    {
      name: "My Persian Kitchen",
      description:
        "A description of the website will go here, explain what it does and how extremely useful it is.",
      image: MPKLogo,
      link: "https://mypersiankitchen.co.uk/",
      tools: [tools.react, tools.sanity, tools.styledComponents],
    },
    {
      name: "Feral Trip",
      description:
        "A description of the website will go here, explain what it does and how extremely useful it is.",
      image: FeralTripLogo,
      link: "https://feraltrip.com/",
      tools: [tools.react, tools.mapbox],
    },
    {
      name: "Cardy B",
      description:
        "A description of the website will go here, explain what it does and how extremely useful it is.",
      image: CardLogo,
      link: "https://cardy-b.netlify.app/",
      tools: [tools.javascript, tools.html, tools.css],
    },
    {
      name: "SmallSips",
      description:
        "A description of the website will go here, explain what it does and how extremely useful it is.",
      image: SmallSipsLogo,
      link: "https://smallsips.netlify.app/",
      tools: [tools.vue, tools.axios],
    },
    {
      name: "BookerBee",
      description:
        "A description of the website will go here, explain what it does and how extremely useful it is.",
      image: SlackLogo,
      link: "https://slack.com/",
      tools: [tools.node, tools.slack],
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
