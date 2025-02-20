// HomePage.jsx
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Hello from "../Hello/Hello";
import * as S from "./HomePage.styled";
import TabPanel from "../TabPanel/TabPanel";
import SkillCards from "../SkillCards/SkillCards";
import Contact from "../Contact/Contact";
import Button from "../Button/Button";
import Projects from "../Projects/Projects";
import CompaniesBanner from "../CompaniesBanner/CompaniesBanner";

const HomePage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        py: "2rem",
      }}
      mb={20}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
        sx={{
          mt: { xs: 1, sm: 3 },
          mr: { xs: 1, sm: 4 },
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

      {/* First Panel */}
      <TabPanel role="tabpanel" hidden={value !== 0} value={0} index={0}>
        <Box
          sx={{
            mt: { xs: "10vh", sm: "20vh" },
            ml: { sm: "25px" },
          }}
        >
          <Hello />
          <Box>
            <Button variant="outlined" onClick={() => setValue(1)}>
              See projects
            </Button>
          </Box>
        </Box>

        {/* Companies Banner */}
        <Box mt={30}>
          <CompaniesBanner />
        </Box>

        <Box sx={{ mt: { xs: 10, sm: 20 } }}>
          <SkillCards />
        </Box>
      </TabPanel>

      {/* Second Panel */}
      <TabPanel role="tabpanel" hidden={value !== 1} value={1} index={1}>
        <Box mt="10vh">
          <Projects
            data={[
              {
                title: "Sync Savings",
                text: "This secure web app seamlessly integrates with any payroll service, enabling automatic savings directly from your paycheque.",
                href: "https://www.linkedin.com/company/sync-savings/posts/?feedView=all",
                frontImageUrl: "/img/projects/sync-back.png",
                backImageUrl: "/img/projects/sync-front.png",
                isMobile: true,
              },
              {
                title: "Octopus Electric Vehicles",
                text: "Helping thousands shops for EVs everyday. Browse, spec-up and lease cars online.",
                href: "https://octopusev.com",
                frontImageUrl: "/img/projects/oev-front.png",
                backImageUrl: "/img/projects/oev-back.png",
              },
              {
                title: "PickEasy",
                text: "Save your favorite places to eat, drink, and hang out, so your friends always know where to go for the best experiences!",
                frontImageUrl: "/img/projects/pickeasy_1.png",
                backImageUrl: "/img/projects/pickeasy_2.png",
                isMobile: true,
              },
              {
                title: "Sophie Simone Designs",
                text: "Shop online for unique, handmade gold and silver jewelry inspired by Mexican nature.",
                href: "https://sophiesimonedesigns.com",
                frontImageUrl: "/img/projects/ssd_1.png",
                backImageUrl: "/img/projects/ssd_2.png",
              },
              {
                title: "Deborah Tseng Jewellery",
                text: "Explore poetic, sculptural jewelry from a talented London-based designer.",
                href: "https://deborahtseng.com",
                frontImageUrl: "/img/projects/tseng-back.png",
                backImageUrl: "/img/projects/tseng-front.png",
              },
              {
                title: "Ananda Teertha",
                text: "Book mindfulness coaching online and buy the author's book — a worldwide best-seller.",
                href: "https://anandateertha.com",
                frontImageUrl: "/img/projects/ananda_teertha_1.png",
                backImageUrl: "/img/projects/ananda_teertha_2.png",
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

      <Box sx={{ mt: { xs: 7, sm: 15 } }}>
        <Contact setValue={setValue} value={value} />
      </Box>
    </Box>
  );
};

export default HomePage;
