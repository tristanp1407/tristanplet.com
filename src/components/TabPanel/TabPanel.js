import React from "react";
import Box from "@mui/material/Box";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ margin: { xs: 2, sm: 4 } }}>{children}</Box>
      )}
    </div>
  );
};

export default TabPanel;
