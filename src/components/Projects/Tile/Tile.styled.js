import styled from "styled-components";

let tileWidth = "300px";

export const OneProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px auto;
`;

export const Tile = styled.a`
  height: 250px;
  width: ${tileWidth};
  /* max-width: ${tileWidth}; */
  border-radius: 20px;
  /* margin: 40px 40px 0 0; */
  margin: 20px auto;
  overflow: hidden;
`;

export const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: 0.3s;

  :hover {
    transform: scale(1.05);
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.theme.fontColor};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
  }
`;

export const ProjectTitle = styled.h3`
  margin: 15px 0 0 0;

  @media (max-width: 768px) {
    margin: 0;
  }
  :hover {
    opacity: 0.9;
  }
`;

export const ProjectDescription = styled.p`
  margin: 5px 0 0 0;
  max-width: ${tileWidth};
`;

export const ToolsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const ToolPill = styled.div`
  border-radius: 50px;
  padding: 3px 8px;
  background-color: ${(props) => props.backgroundColor};
  margin: 5px 5px auto auto;
  color: #f2f2f2;
  font-weight: bold;
  font-size: 13px;
`;
