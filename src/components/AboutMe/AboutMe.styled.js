import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 100px;
  max-width: 800px;
`;

export const Copy = styled.p`
  color: ${(props) => props.theme.fontColor};
  line-height: 200%;
  text-align: center;
  font-size: 20px !important;
`;
