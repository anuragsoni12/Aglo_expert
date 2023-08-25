import B from "../../Images/Btn.png";
import React from "react";
import "./HomePage.css";
import { Box } from "@mui/material";
// import ShopTwoIcon from "@mui/icons-material/ShopTwo";

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
          <button className="left-container-btn">
            {" "}
            <img
              style={{
                width: "25px",

                // backgroundColor: "white",
              }}
              src={B}
              alt=""
            />
            <span style={{ padding: "0px 0px 0px 10px" }}>Buy AlgoExpert</span>
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftBoxContent;
