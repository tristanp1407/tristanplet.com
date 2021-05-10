import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  max-height: 420px;
  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 0;
  }
`;

export const Shadow = styled.div`
  width: 150px;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  background-image: linear-gradient(
    to right,
    transparent,
    ${(props) => props.theme.body}
  );
`;

export const OneItem = styled.div`
  min-width: 400px;
  height: 400px;
  line-height: 400px;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;
