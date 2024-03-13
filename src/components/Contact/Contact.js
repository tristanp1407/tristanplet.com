import React from "react";
import { IconContext } from "react-icons";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaFileDownload } from "react-icons/fa";
import Button from "../Button/Button";
import downloadPDF from "../../utils/downloadCv";
import Box from "@mui/material/Box";

export default function Contact(props) {
  const openMe = (link) => {
    window.open(link, "_blank");
  };

  return (
    <IconContext.Provider
      value={{ color: (props) => props.theme.fontColor, size: "50px" }}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Button
          onClick={() => openMe("https://www.linkedin.com/in/tristan-plet")}
          startIcon={<RiLinkedinBoxFill variant="outlined" size={25} />}
        >
          Connect
        </Button>
        <Button
          onClick={() => downloadPDF()}
          startIcon={<FaFileDownload size={25} />}
        >
          view CV
        </Button>
        {props.value !== 1 && (
          <Button variant="outlined" onClick={() => props.setValue(1)}>
            See portfolio
          </Button>
        )}
      </Box>
    </IconContext.Provider>
  );
}
