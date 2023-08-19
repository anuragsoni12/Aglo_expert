import { Box } from "@mui/material";
import React from "react";
import LogoI from "../../Logo3.png";
import "./NavBar.css";

const Logo = () => {
  return (
    <Box className="logo-container">
      <Box className="logo-container-top">
        <img className="image" src={LogoI} alt="" />
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "400",
            paddingRight: "25px",
          }}
        >
          AlgoExpert
        </h2>
      </Box>
      <Box className="logo-container-bottom">
        <p>Ace the Technical Interviews</p>
      </Box>
    </Box>
  );
};

export default Logo;
