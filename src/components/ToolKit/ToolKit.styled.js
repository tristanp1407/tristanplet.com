import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: ${(props) => props.theme.fontColor};
`;

export const ListsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const UL = styled.ul`
  margin: 0 20vw 0 0;
  padding: 0;
  list-style: none;
  list-style-position: outside;

  li {
    margin: 10px 0;
  }
`;
