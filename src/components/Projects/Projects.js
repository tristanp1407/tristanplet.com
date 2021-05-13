import React from "react";
import * as S from "./Projects.styles";
import Tile from "./Tile/Tile";

import MPKLogo from "../../assets/images/mpk_logo.png";
import FeralTripLogo from "../../assets/images/feraltrip_logo.png";
import CardLogo from "../../assets/images/card_logo.jpeg";
import SmallSipsLogo from "../../assets/images/cocktail.png";
import SlackLogo from "../../assets/images/slack.png";
import ProperMugs from "../../assets/images/propermugs_logo.png";

export default function Projects() {
  let tools = {
    react: { name: "React", color: "#32cbf2" },
    sanity: { name: "Sanity CMS", color: "#EF3F2E" },
    mapbox: { name: "MapBox", color: "#0575E0" },
    javascript: { name: "Javascript", color: "#ddc000" },
    vue: { name: "Vue", color: "#3FB983" },
    css: { name: "CSS", color: "#563E7C" },
    node: { name: "Node", color: "#3E863C" },
    html: { name: "HTML", color: "#E34C25" },
    styledComponents: { name: "Styled Components", color: "#DA7192" },
    axios: { name: "Axios", color: "#3B6BE2" },
    slack: { name: "Slack", color: "#601F69" },
    wix: { name: "Wix", color: "#aaaaaa" },
    illustrator: { name: "Adobe Illustrator", color: "#f49200" },
  };

  let projects = [
    {
      name: "My Persian Kitchen",
      description:
        "Persian cuisine delivered to your door! This page uses Sanity CSM so that the chefs can update their blog themselves. 👩‍🍳",
      image: MPKLogo,
      link: "https://mypersiankitchen.co.uk/",
      tools: [tools.react, tools.sanity, tools.styledComponents],
    },
    {
      name: "Proper Mugs",
      description:
        "Check this if you love coffee! A website created for mine and my friend's new caffeinated venture. ☕️",
      image: ProperMugs,
      link: "https://propermugscoffee.com/",
      tools: [tools.wix, tools.illustrator],
    },
    {
      name: "BookerBee",
      description:
        "This little Slack app automatically asks your manager for approval before letting you book onto a course. ",
      image: SlackLogo,
      link: "https://github.com/tristanp1407/ef-slackbot",
      tools: [tools.node, tools.slack],
    },

    {
      name: "Feral Trip",
      description: "My first ever website! Explore the UK's great outdoors.",
      image: FeralTripLogo,
      link: "https://feraltrip.com/",
      tools: [tools.react, tools.mapbox],
    },
    {
      name: "SmallSips",
      description:
        "Tasty cocktail recipes made easy. My first project using Vue! 🍸",
      image: SmallSipsLogo,
      link: "https://smallsips.netlify.app/",
      tools: [tools.vue, tools.axios],
    },
    {
      name: "Cardy B",
      description:
        "Shuffle, draw and sort cards. This was a fun challenge for an internal application within IBM. 🃏",
      image: CardLogo,
      link: "https://cardy-b.netlify.app/",
      tools: [tools.javascript, tools.html, tools.css],
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
