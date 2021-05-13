import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.fontColor};
  outline: none;
  margin: 0 0px 0 auto;
  background: none;
  border: none;
  border-radius: 50px;
  margin: 5vw 5vw;
  transition: all 3s;
  cursor: pointer;

  svg {
    transition: all 0.5s;
  }

  :hover {
    svg {
      transform: scale(1.2) rotate(-90deg);
    }
  }
`;
