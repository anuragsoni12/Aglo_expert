import { Box } from "@mui/material";
import React from "react";
import "./SectionPageStyle.css";
import { TopComponent } from "./TopComponent";
import { CardComponent } from "./CardComponent";

const SectionPage = () => {
  return (
    <Box className="section-page-container">
      <Box>
        <TopComponent />
      </Box>
      <Box>
        <CardComponent />
      </Box>
    </Box>
  );
};

export default SectionPage;
