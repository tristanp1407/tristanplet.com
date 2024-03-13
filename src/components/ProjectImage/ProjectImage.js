import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Paper from "@mui/material/Paper";

const LaptopScreen = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; // This maintains an aspect ratio
`;

const OverlappingImage = styled(Paper)`
  position: absolute;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
`;

const BackImage = styled(OverlappingImage)`
  top: 15%;
  left: 15%;
  width: 80%;
  height: 80%;
  z-index: 1;
  transform: ${({ isHovered }) =>
    isHovered
      ? "scale(1.1) translateX(5%) translateY(5%)"
      : "translateX(0) translateY(0)"};

  // Hide on mobile devices
  @media (max-width: 768px) {
    display: none;
  }
`;

const frontImageMobileStyle = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const FrontImage = styled(OverlappingImage)`
  top: 0;
  left: 0;
  width: 70%;
  height: 70%;
  z-index: 2;
  transform: ${({ isHovered }) =>
    isHovered
      ? "scale(0.5) translateX(-10%) translateY(-10%)"
      : "translateX(0) translateY(0)"};

  @media (max-width: 768px) {
    ${frontImageMobileStyle}
    transform: none
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledImage = styled.img`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: top;
`;

const shineAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background-repeat: no-repeat;
  background-size: 200px 100%;
  animation: ${shineAnimation} 1.5s infinite;
`;

const LaptopScreenComponent = ({ frontImageUrl, backImageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <LaptopScreen
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BackImage elevation={2} isHovered={isHovered}>
        <ImageWrapper>
          <StyledImage
            src={backImageUrl}
            alt="Back Image"
            onLoad={handleImageLoad}
          />
        </ImageWrapper>
        {isLoading && <LoadingOverlay />}
      </BackImage>
      <FrontImage elevation={isHovered ? 8 : 4} isHovered={isHovered}>
        <ImageWrapper>
          <StyledImage
            src={frontImageUrl}
            alt="Front Image"
            onLoad={handleImageLoad}
          />
        </ImageWrapper>
        {isLoading && <LoadingOverlay />}
      </FrontImage>
    </LaptopScreen>
  );
};

export default LaptopScreenComponent;
