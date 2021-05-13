import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.fontColor};
  right: 0;
  margin: 0px;
  z-index: 100;

  @media (max-width: 768px) {
    ul {
      display: none;
    }

    position: absolute;
    margin: 0px;
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style-type: none;
  list-style-position: inside;

  li {
    margin-bottom: 10px;
    cursor: pointer;
  }
`;
