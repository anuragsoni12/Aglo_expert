import { Box } from "@mui/material";
import React from "react";
import "./SectionPageStyle.css";
import { TopComponent } from "./TopComponent";
import { CardComponent } from "./CardComponent";
import { TableComponent } from "./TableComponent";
import { EmptyComponent } from "./EmptyComponent";

const SectionPage = () => {
  return (
    <Box className="section-page-container">
      <Box>
        <TopComponent />
      </Box>
      <Box>
        <CardComponent />
      </Box>
      <Box style={{ width: "100%" }}>
        <TableComponent />
      </Box>
      <Box style={{ width: "100%" }}>
        <EmptyComponent />
      </Box>
    </Box>
  );
};

export default SectionPage;
