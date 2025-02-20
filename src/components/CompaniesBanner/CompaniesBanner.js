// CompaniesBanner.jsx
import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";

const BannerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  /* On mobile, each icon wrapper takes 50% width and gets vertical padding */
  @media (max-width: 600px) {
    flex: 1 0 50%;
    padding: 10px 0;
  }
`;

const IconImage = styled.img`
  height: 30px;
  width: auto;
  opacity: 0.7; /* 30% transparent */
`;

const CompaniesBanner = () => {
  const companies = [
    "/img/companies/sync.png",
    "/img/companies/octopus.png",
    "/img/companies/ibm.png",
    "/img/companies/bulb.png",
  ];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h4 style={{ color: "#96a3a8", marginBottom: "40px", fontWeight: 300 }}>
        Spent time at:
      </h4>
      <BannerContainer>
        {companies.map((src, index) => (
          <IconWrapper key={index}>
            <IconImage src={src} alt={`Company ${index + 1}`} />
          </IconWrapper>
        ))}
      </BannerContainer>
    </Box>
  );
};

export default CompaniesBanner;
