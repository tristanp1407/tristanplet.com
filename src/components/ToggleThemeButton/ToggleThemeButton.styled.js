import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.fontColor};
  outline: none;
  margin: 0 0px 0 auto;
  background: none;
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: 50px;
  padding: 5px 10px;
`;
