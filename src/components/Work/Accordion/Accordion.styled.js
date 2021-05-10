import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.fontColor};
  width: 80vw;
  margin-bottom: 100px;
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
  border-bottom: 1px solid ${(props) => props.theme.fontColor};

  cursor: pointer;

  h1 {
    padding: 2rem 0;
  }
`;

export const DropDown = styled.div`
  padding: 30px 0;

  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
      /* transform: translateX(-100%); */
    }
    100% {
      opacity: 1;
      /* transform: translateX(0); */
    }
  }

  li {
    animation: 1s ease-out 0s 1 slideInFromLeft;
    list-style: none;
    margin: 30px 0;
  }
`;
