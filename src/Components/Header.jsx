import React from "react";
import Navigation from "./Navigation";
import { Box, styled } from "@mui/material";
import LeftBoxContent from "./HomePageContent/LeftBoxContent";
import RightBoxContent from "./HomePageContent/RightBoxContent";
const BoxHeaderStyle = styled(Box)``;

const ContentBox = styled(Box)`
  // border: 2px solid red;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-between;
`;
const MainContentBox = styled(Box)`
  width: 48%;
  height: 100%;
  // border: 2px solid green;
  display: flex;
`;

const Header = () => {
  return (
    <Box>
      <Navigation />
      <ContentBox>
        <MainContentBox style={{ justifyContent: "flex-end" }}>
          <LeftBoxContent />
        </MainContentBox>
        <MainContentBox>
          <RightBoxContent />
        </MainContentBox>
      </ContentBox>
    </Box>
  );
};

export default Header;
