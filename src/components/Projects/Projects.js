// Projects.jsx
import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import LaptopScreenComponent from "../ProjectImage/ProjectImage";
import Button from "../Button/Button";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: center;

  @media (max-width: 700px) {
    justify-content: flex-start;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
  min-width: 300px;
  z-index: 0;
  cursor: pointer;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 400px;
  min-width: 300px;
`;

const Title = styled.h2`
  color: #f2f2f2;
  margin-bottom: 1rem;
  margin-top: 0;
`;

const Text = styled.p`
  color: #f2f2f2;
  line-height: 1.5;
`;

const Projects = ({ data }) => {
  return (
    <Box display="flex" flexDirection="column" sx={{ gap: { xs: 3, sm: 5 } }}>
      {data.map(
        ({
          title,
          text,
          href,
          frontImageUrl,
          backImageUrl,
          ismobile = false,
        }) => (
          <Container key={title}>
            <ImageContainer onClick={() => href && window.open(href, "_blank")}>
              <LaptopScreenComponent
                frontImageUrl={frontImageUrl}
                backImageUrl={backImageUrl}
                ismobile={ismobile}
              />
            </ImageContainer>
            <TextContainer>
              <Title>{title}</Title>
              <Text>{text}</Text>
              {href && (
                <Button variant="outlined" href={href} target="_blank">
                  Browse
                </Button>
              )}
            </TextContainer>
          </Container>
        )
      )}
    </Box>
  );
};

export default Projects;
