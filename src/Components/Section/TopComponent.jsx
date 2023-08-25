import React from "react";
import { Box, Typography } from "@mui/material";
import { FaPlayCircle } from "react-icons/fa";
import "./SectionPageStyle.css";
export const TopComponent = () => {
  return (
    <div>
      <Box className="section-page-container-first">
        <Typography variant="h3">What is Algo Expert?</Typography>
        <button className="watch-btn">
          <FaPlayCircle className="watch-btn-icon" />
          <span className="watch-btn-text">Watch the video</span>
        </button>
      </Box>
    </div>
  );
};
