import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.fontColor};

  margin-top: 25vh;
  /* @media (max-width: 768px) {
    margin: auto;
  } */
  h1 {
    font-weight: 300;
    line-height: 60px;
  }
`;

export const TypewriterWrapper = styled.span`
  font-size: 4rem;
  font-weight: bold;
`;

export const ProfilePhoto = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  overflow: hidden;
  display: flex;
  align-items: center; // Centers content vertically
  justify-content: center; // Centers content horizontally
  margin-bottom: 50px;

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    z-index: -1;
    background: radial-gradient(circle, transparent, #181a24 70%);
    border-radius: 50%;
  }

  img {
    min-width: 100%; // Ensures the image covers the entire width of the container
    min-height: 100%; // Ensures the image covers the entire height of the container
    object-fit: contain; // Adjusts the zoom level of the image
  }
`;
