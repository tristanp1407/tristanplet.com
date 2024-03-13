import React, { useState } from "react";

import Box from "@mui/material/Box";

import Hello from "../Hello/Hello";
import * as S from "./HomePage.styled";
import TabPanel from "../TabPanel/TabPanel";
import SkillCards from "../SkillCards/SkillCards";
import Contact from "../Contact/Contact";
import StickyPaperButton from "../StickyButton/StickyButton";

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
      <TabPanel role="tabpanel" hidden={value !== 0}>
        <Box sx={{ marginTop: { xs: "10vh", sm: "20vh" } }}>
          <Hello />
        </Box>
        <Box sx={{ marginTop: { xs: 10, sm: 20 } }}>
          <SkillCards />
        </Box>
      </TabPanel>
      <TabPanel role="tabpanel" hidden={value !== 1}></TabPanel>
      <Box mt={5}>
        <Contact setValue={setValue} value={value} />
      </Box>
      <StickyPaperButton />
    </Box>
  );
}
