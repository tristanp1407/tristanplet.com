import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.fontColor};
  width: 100vw;

  div {
    margin-left: 20px;
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  list-style-position: inside;

  li {
    margin: 0 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: right;
  }
`;
