import React from "react";
import { Box, Stack } from "@mui/material";

import styled from "@emotion/styled";

const Item = styled(Stack)`
  width: 100%;
  background: #aaa;
  padding: 8px;
  border-radius: 5px 5px 0px 0px;
  font-weight: 500;
  display: flex;
flex-wrap :wrap;
  justify-content: center;
`;
const RightBoxContent = () => {
  return (
    <Box className="Right-container">
      <Box className="Right-container-card left-card-width">
        <Box className="Right-container-card-Top">
          <Item>Prompt</Item>
          <Stack></Stack>
        </Box>
        <Box className="Right-container-card-Bottom">Bottom</Box>
      </Box>
      <Box className="Right-container-card right-card-width">
        <Box className="Right-container-card-Top">
          <Item>
            <span>Input</span>
            <span>
              <button>Run</button>
            </span>
          </Item>
          <Stack></Stack>
        </Box>
        <Box className="Right-container-card-Bottom">Box</Box>
      </Box>
    </Box>
  );
};

export default RightBoxContent;
