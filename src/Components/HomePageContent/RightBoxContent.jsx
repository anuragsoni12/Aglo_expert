import React from "react";
import { Box, Stack } from "@mui/material";

import "./HomePage.css";

const RightBoxContent = () => {
  return (
    <Box className="right-container">
      <Box className="right-container-first">
        <Box className="right-container-content">
          <Box className="content-box">
            <Box className="top-box"></Box>
            <Box className="bottom-box"></Box>
          </Box>
          <Box className="content-box">
            <Box className="top-box"></Box>
            <Box className="bottom-box"></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RightBoxContent;
