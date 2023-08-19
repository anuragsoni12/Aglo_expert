import { Box, Typography } from "@mui/material";
import React from "react";
import "./SectionPageStyle.css";
import { FaPlayCircle } from "react-icons/fa";

const SectionPage = () => {
  return (
    <Box className="section-page-container">
      <Box className="section-page-container-first">
        <Typography variant="h3">What is Algo Expert?</Typography>
        <button className="watch-btn">
          <FaPlayCircle className="watch-btn-icon" />
          <span className="watch-btn-text">Watch the video</span>
        </button>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default SectionPage;
