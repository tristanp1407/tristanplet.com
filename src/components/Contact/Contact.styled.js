import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90vw;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 100px auto 200px;
`;

export const OneLink = styled.a`
  /* background-color: rgba(255, 255, 255, 0.1); */
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    transform: scale(0.9);
  }
`;
