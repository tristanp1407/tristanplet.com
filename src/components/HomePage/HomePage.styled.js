import styled from "styled-components";

export const HomePageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Hello = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.fontColor};
`;
