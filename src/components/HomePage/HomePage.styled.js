import styled from "styled-components";
import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";

import { pageWidth } from "../../themes";

export const Tabs = styled(MuiTabs)`
  .MuiTabs-indicator {
    background-color: ${(props) => props.theme.highlight};
  },

`;

export const Tab = styled(MuiTab)`
  color: ${(props) => props.theme.fontColor};

  font-size: 12px;
  padding: 0 5px;

  &.Mui-selected {
    color: ${(props) => props.theme.highlight};
  }

  @media (min-width: 450px) {
    padding: 0 30px;
    font-size: 16px;
  }
`;

export const Document = styled.div`
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Section = styled.div`
  min-height: ${(props) => props.minHeight || "0"};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: ${(props) => props.alignItems};
  margin: auto;
  /* padding-left: 10vw; */
  width: 90vw;
  max-width: ${pageWidth};

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
    margin: 0 auto;
    /* align-items: center; */
  }
`;
