// LaptopScreenComponent.jsx
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Paper from "@mui/material/Paper";

const LaptopScreen = styled.div`
  position: relative;
  overflow: visible;
  max-width: 100%;
  margin: 0 auto;
  ${({ isMobile }) =>
    isMobile
      ? `
        display: flex;
        flex-direction: row;
        gap: 10px;
        max-height: 400px;
      `
      : `
        height: 0;
        padding-top: 56.25%;
      `}
`;

const OverlappingImage = styled(Paper)`
  position: absolute;
  overflow: visible;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  transform-origin: center;
`;

const BackImage = styled(OverlappingImage)`
  top: ${({ isMobile }) => (isMobile ? "0" : "15%")};
  left: ${({ isMobile }) => (isMobile ? "0" : "15%")};
  width: ${({ isMobile }) => (isMobile ? "100%" : "80%")};
  height: ${({ isMobile }) => (isMobile ? "100%" : "80%")};
  z-index: 1;
  transform: ${({ isHovered, isHoveredBack, isMobile }) =>
    isMobile
      ? isHoveredBack
        ? "scale(1.2)"
        : "scale(1)"
      : isHovered
      ? "scale(1.1) translateX(5%) translateY(5%)"
      : "translateX(0) translateY(0)"};

  ${({ isMobile }) =>
    isMobile &&
    `
      position: relative;
      width: 45%;
      aspect-ratio: 9 / 20;
      max-height: 400px;
    `}
`;

const FrontImage = styled(OverlappingImage)`
  top: 0;
  left: 0;
  width: ${({ isMobile }) => (isMobile ? "100%" : "70%")};
  height: ${({ isMobile }) => (isMobile ? "100%" : "70%")};
  z-index: 2;
  transform: ${({ isHovered, isHoveredFront, isMobile }) =>
    isMobile
      ? isHoveredFront
        ? "scale(1.2)"
        : "scale(1)"
      : isHovered
      ? "scale(0.5) translateX(-10%) translateY(-10%)"
      : "translateX(0) translateY(0)"};

  ${({ isMobile }) =>
    isMobile &&
    `
      position: relative;
      width: 45%;
      aspect-ratio: 9 / 20;
      max-height: 400px;
    `}
`;

const SideBySideContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 8px;
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
  border-radius: 8px;
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

const LaptopScreenComponent = ({
  frontImageUrl,
  backImageUrl,
  isMobile = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredFront, setIsHoveredFront] = useState(false);
  const [isHoveredBack, setIsHoveredBack] = useState(false);
  const [isLoadingFront, setIsLoadingFront] = useState(true);
  const [isLoadingBack, setIsLoadingBack] = useState(true);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleImageLoadFront = () => setIsLoadingFront(false);
  const handleImageLoadBack = () => setIsLoadingBack(false);

  const handleMouseEnterFront = () => setIsHoveredFront(true);
  const handleMouseLeaveFront = () => setIsHoveredFront(false);

  const handleMouseEnterBack = () => setIsHoveredBack(true);
  const handleMouseLeaveBack = () => setIsHoveredBack(false);

  return (
    <LaptopScreen isMobile={isMobile}>
      {isMobile ? (
        <SideBySideContainer>
          <BackImage
            elevation={2}
            isHoveredBack={isHoveredBack}
            isMobile={isMobile}
            onMouseEnter={handleMouseEnterBack}
            onMouseLeave={handleMouseLeaveBack}
          >
            <ImageWrapper isMobile={isMobile}>
              <StyledImage
                src={backImageUrl}
                alt="Back Image"
                onLoad={handleImageLoadBack}
              />
            </ImageWrapper>
            {isLoadingBack && <LoadingOverlay />}
          </BackImage>
          <FrontImage
            elevation={2}
            isHoveredFront={isHoveredFront}
            isMobile={isMobile}
            onMouseEnter={handleMouseEnterFront}
            onMouseLeave={handleMouseLeaveFront}
          >
            <ImageWrapper isMobile={isMobile}>
              <StyledImage
                src={frontImageUrl}
                alt="Front Image"
                onLoad={handleImageLoadFront}
              />
            </ImageWrapper>
            {isLoadingFront && <LoadingOverlay />}
          </FrontImage>
        </SideBySideContainer>
      ) : (
        <>
          {backImageUrl && (
            <BackImage
              elevation={2}
              isHovered={isHovered}
              isMobile={isMobile}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ImageWrapper isMobile={isMobile}>
                <StyledImage
                  src={backImageUrl}
                  alt="Back Image"
                  onLoad={handleImageLoadBack}
                />
              </ImageWrapper>
              {isLoadingBack && <LoadingOverlay />}
            </BackImage>
          )}
          <FrontImage
            elevation={isHovered ? 8 : 4}
            isHovered={isHovered}
            isMobile={isMobile}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageWrapper isMobile={isMobile}>
              <StyledImage
                src={frontImageUrl}
                alt="Front Image"
                onLoad={handleImageLoadFront}
              />
            </ImageWrapper>
            {isLoadingFront && <LoadingOverlay />}
          </FrontImage>
        </>
      )}
    </LaptopScreen>
  );
};

export default LaptopScreenComponent;
