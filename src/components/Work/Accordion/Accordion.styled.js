import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.fontColor};
  width: 100%;
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

  cursor: pointer;

  h1 {
    padding: 2rem 0;
  }
`;

export const DropDown = styled.div`
  /*  */
`;
