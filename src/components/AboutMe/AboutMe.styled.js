import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  max-width: 80vw;
  max-height: 420px;
  display: flex;
  overflow-x: auto !important;

  &::-webkit-scrollbar {
    height: 0;
  }
`;

export const OneItem = styled.div`
  min-width: 400px;
  height: 400px;
  line-height: 400px;
  text-align: center;
  color: white;
`;
