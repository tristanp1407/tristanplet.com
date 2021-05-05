import styled from "styled-components";

export const Document = styled.div`
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
`;

export const Section = styled.div`
  min-height: ${(props) => props.minHeight || "0"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.alignItems};
  margin: auto;
  padding-left: 10vw;
`;
