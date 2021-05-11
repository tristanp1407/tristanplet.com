import styled from "styled-components";
import { pageWidth } from "../../themes";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  top: 0;
  transform: translate(0px, 50px);
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.fontColor};
  width: 100%;
  max-width: ${pageWidth};
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
