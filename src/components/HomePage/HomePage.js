import React, { useState } from "react";

import Box from "@mui/material/Box";

import Hello from "../Hello/Hello";
import * as S from "./HomePage.styled";
import TabPanel from "../TabPanel/TabPanel";
import SkillCards from "../SkillCards/SkillCards";
import Contact from "../Contact/Contact";
import StickyPaperButton from "../StickyButton/StickyButton";
import Button from "../Button/Button";
import Projects from "../Projects/Projects";

export default function BasicTabs(theme) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} mb={20}>
      <Box
        display="flex"
        justifyContent="flex-end"
        sx={{
          marginTop: { xs: 1, sm: 3 },
          marginRight: { xs: 1, sm: 4 },
          gap: { xs: 1, sm: 3 },
        }}
      >
        <S.Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <S.Tab label="Hello" />
          <S.Tab label="Portfolio" />
        </S.Tabs>
      </Box>
      <TabPanel role="tabpanel" hidden={value !== 0} value={0} index={0}>
        <Box sx={{ marginTop: { xs: "10vh", sm: "20vh" } }}>
          <Hello />
          <Box>
            <Button variant="outlined" onClick={() => setValue(1)}>
              See projects
            </Button>
          </Box>
        </Box>
        <Box sx={{ marginTop: { xs: 10, sm: 20 } }}>
          <SkillCards />
        </Box>
      </TabPanel>
      <TabPanel role="tabpanel" hidden={value !== 1} value={1} index={1}>
        <Box mt="10vh">
          <Projects
            data={[
              {
                title: "Octopus Electric Vehicles",
                text: "Helping thousands shops for EVs everyday. Browse, spec-up and buy cars online.",
                href: "https://octopusev.com",
                frontImageUrl: "/img/projects/oev-front.png",
                backImageUrl: "/img/projects/oev-back.png",
              },
              {
                title: "My Persian Kitchen",
                text: "Persian cuisine to your door. Browse blog articles and view the menu online.",
                href: "https://mypersiankitchen.co.uk",
                frontImageUrl: "/img/projects/mpk-front.png",
                backImageUrl: "/img/projects/mpk-back.png",
              },
            ]}
          />
        </Box>
      </TabPanel>
      <Box sx={{ marginTop: { xs: 7, sm: 15 } }}>
        <Contact setValue={setValue} value={value} />
      </Box>
      <StickyPaperButton style={{ zIndex: 9999 }} />
    </Box>
  );
}
