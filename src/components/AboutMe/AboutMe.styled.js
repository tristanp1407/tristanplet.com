import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const Tile = styled.div`
  height: 400px;
  width: 400px;
  margin: 100px;
  border: 1px solid red;
`;
