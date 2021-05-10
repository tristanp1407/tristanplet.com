import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.fontColor};

  @media (max-width: 768px) {
    margin: auto;
  }

  h1 {
    font-weight: 300;
    line-height: 60px;
  }
`;

export const TypewriterWrapper = styled.span`
  font-size: 4rem;
  font-weight: bold;
`;
