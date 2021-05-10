import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.fontColor};
  width: 80vw;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid white;

  cursor: pointer;

  h1 {
    padding: 2rem 0;
  }
`;

export const DropDown = styled.div`
  padding: 30px 0;

  li {
    list-style: none;
    margin: 30px 0;
  }
`;
