import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: center;
`;

export const OneLink = styled.a`
  /* background-color: rgba(255, 255, 255, 0.1); */
  margin: 50px;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    transform: scale(0.9);
  }
`;
