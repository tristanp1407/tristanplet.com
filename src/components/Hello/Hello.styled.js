import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.fontColor};

  @media (max-width: 768px) {
    margin: auto;
  }
`;
