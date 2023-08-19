import React from "react";
import "./HomePage.css";
import { Box } from "@mui/material";
const LeftBoxContent = () => {
  return (
    <Box className="left-container">
      <Box>
        <h1 className="left-container-heading">AlgoExpert</h1>
        <p className="left-container-sub">
          The ultimate resource to prepare for coding interviews. <br />{" "}
          Everything you need, in one streamlined platform.
        </p>
        <Box>
          <button className="left-container-btn">Buy AlgoExpert</button>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftBoxContent;
