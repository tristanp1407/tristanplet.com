import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

export const Copy = styled.p`
  color: ${(props) => props.theme.fontColor};
  line-height: 200%;
  text-align: center;
`;
