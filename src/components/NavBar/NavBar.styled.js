import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.theme.fontColor};
  width: 100vw;
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  list-style-position: inside;

  li {
    margin: 0 10px;
  }
`;
