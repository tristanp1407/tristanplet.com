import styled from "styled-components";

export const Container = styled.div`
  margin: 40vh auto auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;

  color: ${(props) => props.theme.fontColor};
`;
