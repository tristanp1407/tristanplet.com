import React, { useState, useEffect } from "react";
import { Paper, Box, Slide } from "@mui/material";

import Button from "../Button/Button";

const StickyPaperButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Slide direction="up" in={showButton} mountOnEnter unmountOnExit>
      <Box
        sx={{ position: "fixed", bottom: 16, right: 16, textAlign: "right" }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "1rem",
            background: "#041C32",
            borderRadius: 3,
            border: "1px solid #102a42",
          }}
        >
          <h6 style={{ color: "#f2f2f2", fontSize: 16, margin: "0 0 13px 0" }}>
            Project in the works? Let's chat!
          </h6>
          <Button variant="outlined">Work With Me</Button>
        </Paper>
      </Box>
    </Slide>
  );
};

export default StickyPaperButton;
