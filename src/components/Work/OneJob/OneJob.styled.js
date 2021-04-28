import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto 30px ${(props) => props.marginLeft};
  max-width: 600px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
  margin: 0;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.fontColor};

  li {
    margin: 5px 0;
  }
`;
