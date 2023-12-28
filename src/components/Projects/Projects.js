import React from "react";
import * as S from "./Projects.styles";
import Tile from "./Tile/Tile";

import MPKLogo from "../../assets/images/mpk_logo.png";
import OEVLogo from "../../assets/images/oev_logo.png";
import PeelLogo from "../../assets/images/peel_logo.png";

export default function Projects() {
  let tools = {
    react: { name: "React", color: "#32cbf2" },
    sanity: { name: "Sanity CMS", color: "#EF3F2E" },
    styledComponents: { name: "Styled Components", color: "#DA7192" },
    nextJs: { name: "Next.js", color: "black" },
    square: { name: "Square", color: "black" },
    python: { name: "Python", color: "#4B8BBE" },
    docker: { name: "Docker", color: "#0db7ed" },
    postgres: { name: "Postgres", color: "#0064a5" },
    instagram: { name: "Instagram", color: " #bc2a8d" },
    meta: { name: "Meta Commerce", color: " #0668E1" },
    // mapbox: { name: "MapBox", color: "#0575E0" },
    // javascript: { name: "Javascript", color: "#ddc000" },
    // vue: { name: "Vue", color: "#3FB983" },
    // css: { name: "CSS", color: "#563E7C" },
    // node: { name: "Node", color: "#3E863C" },
    // html: { name: "HTML", color: "#E34C25" },
    // axios: { name: "Axios", color: "#3B6BE2" },
    // slack: { name: "Slack", color: "#601F69" },
    // wix: { name: "Wix", color: "#aaaaaa" },
    // illustrator: { name: "Adobe Illustrator", color: "#f49200" },
  };

  let projects = [
    {
      name: "Octopus EV",
      description:
        "Used by 1000s to browse and buy EVs everyday, with an ever-changing blog feed and a tool to customise and buy your EV.",
      image: OEVLogo,
      link: "https://octopusev.com/",
      tools: [
        tools.react,
        tools.nextJs,
        tools.sanity,
        tools.python,
        tools.styledComponents,
        tools.docker,
        tools.postgres,
      ],
    },
    {
      name: "My Persian Kitchen",
      description:
        "Persian cuisine delivered to your door! This page uses Sanity CSM so that the chefs can update their blog themselves. 👩‍🍳",
      image: MPKLogo,
      link: "https://mypersiankitchen.co.uk/",
      tools: [tools.react, tools.sanity, tools.styledComponents],
    },
    {
      name: "Peel Studio Clothing",
      description:
        "An old project of mine: An e-commerce site linked to Instagram to sell clothes online.",
      image: PeelLogo,
      link: "https://peelstudio.square.site/",
      tools: [tools.square, tools.instagram, tools.meta],
    },
    // {
    //   name: "Proper Mugs",
    //   description:
    //     "Check this if you love coffee! A website for a new caffeinated venture, founded by me and my friends. ☕️",
    //   image: ProperMugs,
    //   link: "https://propermugscoffee.com/",
    //   tools: [tools.wix, tools.illustrator],
    // },
    // {
    //   name: "BookerBee",
    //   description:
    //     "This little Slack app automatically asks your manager for approval before letting you book onto a course. ",
    //   image: SlackLogo,
    //   link: "https://github.com/tristanp1407/ef-slackbot",
    //   tools: [tools.node, tools.slack],
    // },

    // {
    //   name: "Feral Trip",
    //   description: "My first ever website! Explore the UK's great outdoors.",
    //   image: FeralTripLogo,
    //   link: "https://feraltrip.com/",
    //   tools: [tools.react, tools.mapbox],
    // },
    // {
    //   name: "SmallSips",
    //   description:
    //     "Tasty cocktail recipes made easy. My first project using Vue! 🍸",
    //   image: SmallSipsLogo,
    //   link: "https://smallsips.netlify.app/",
    //   tools: [tools.vue, tools.axios],
    // },
    // {
    //   name: "Cardy B",
    //   description:
    //     "Shuffle, draw and sort cards. This was a fun challenge for an internal application within IBM. 🃏",
    //   image: CardLogo,
    //   link: "https://cardy-b.netlify.app/",
    //   tools: [tools.javascript, tools.html, tools.css],
    // },
  ];

  return (
    <S.Container>
      {projects.map((project, i) => {
        return (
          <Tile
            key={i}
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
