import styled from "styled-components";

export const Header = styled.h1`
  margin: 10vh auto 10vh auto;
  color: ${(props) => props.theme.fontColor};
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
`;
