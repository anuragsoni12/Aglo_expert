import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import SectionPage from "./Section/SectionPage";
import "./HomePageStyle.css";

const Home = () => {
  return (
    <Box className="home-page-container">
      <Box className="home-page">
        <Header />
      </Box>
      <Box className="Section-page">
        <SectionPage />
      </Box>
    </Box>
  );
};

export default Home;
