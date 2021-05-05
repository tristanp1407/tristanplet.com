import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
