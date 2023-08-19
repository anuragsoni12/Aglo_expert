import React from "react";
import { Box } from "@mui/material";
import Logo from "./NavBarComp/Logo";
import Product from "./NavBarComp/Product";
import Content from "./NavBarComp/Content";
import Purchase from "./NavBarComp/Purchase";
import Team from "./NavBarComp/Team";
import styled from "@emotion/styled";
import Login from "./NavBarComp/Login";

const NavigationBoxStyle = styled(Box)`
  // border: 2px solid red;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const BoxStyle = styled(Box)`
  // border: 2px solid red;
  width: 25%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-weight: 600;
  // align-items: center;
`;
const Navigation = () => {
  return (
    <NavigationBoxStyle>
      <BoxStyle>
        <Logo />
      </BoxStyle>
      <BoxStyle
        style={{
          marginTop: "-15px",
        }}
      >
        <Product />
        <Content />
        <Team />
        <Purchase style={{ fontWeight: "600" }} />
      </BoxStyle>
      <BoxStyle
        style={{
          marginTop: "-15px",
        }}
      >
        <Login />
      </BoxStyle>
    </NavigationBoxStyle>
  );
};

export default Navigation;
