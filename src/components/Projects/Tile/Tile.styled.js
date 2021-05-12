import styled from "styled-components";

let tileWidth = "300px";

export const OneProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 70px 80px 0;

  @media (max-width: 768px) {
    margin: 20px auto;
  }
`;

export const Tile = styled.a`
  height: 250px;
  width: ${tileWidth};
  border-radius: 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
  box-shadow: 0px 1px 5px 0px rgba(50, 50, 50, 0.3);
`;

export const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: 0.3s;

  :hover {
    transform: scale(1.02);
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.theme.fontColor};
`;

export const TitleWrapper = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  margin: 15px 0 10px 0;

  svg {
    transition: transform 0.5s;
  }

  :hover > svg {
    transform: rotate(360deg);
  }
`;

export const ProjectTitle = styled.h2`
  margin: 0 5px 0 0;
  border-bottom: 1px solid transparent;
  transition: 0.5s border-bottom;

  :hover {
    border-bottom: 1px solid ${(props) => props.theme.fontColor};
  }
`;

export const ProjectDescription = styled.p`
  max-width: ${tileWidth};
  margin: 0;
`;

export const ToolsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 10px;
`;

export const ToolPill = styled.div`
  border-radius: 50px;
  padding: 3px 8px;
  background-color: ${(props) => props.backgroundColor};
  margin: 5px 5px auto auto;
  color: #f2f2f2;
  font-weight: bold;
  font-size: 13px;
  box-shadow: 0px 1px 3px 0px rgba(50, 50, 50, 0.2);
`;
