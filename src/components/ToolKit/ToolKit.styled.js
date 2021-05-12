import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;

  color: ${(props) => props.theme.fontColor};
`;

export const Title = styled.div`
  font-size: 30px;
`;

export const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
  list-style-position: outside;
  padding: 0;
  margin: 60px 0px;

  li {
    margin-right: 5px;
  }
`;

export const OneTool = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 40px 40px 0;
  cursor: default;
  width: 130px;

  :hover > div {
    /* visibility: visible; */
    opacity: 1;
  }

  div {
    height: 25px;
    opacity: 0;
    transition: all 0.5s;
  }
`;
