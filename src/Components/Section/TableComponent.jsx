import React from "react";
import "./SectionPageStyle.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import LogoI from "../../Logo3.png";
import "../NavBarComp/NavBar.css";
import { TableData } from "../../Data/TableData";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
const TopHeading = () => {
  return (
    <>
      <h2 className="table-heading">
        A Better Way to Prep for Coding Interviews.
      </h2>
    </>
  );
};
export const TableComponent = () => {
  return (
    <Box className="card-container table-container">
      <Box>
        <TopHeading />
      </Box>
      <Box className="table-inner-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="thead">
                <TableCell></TableCell>
                <TableCell align="center" className="t-head-cell">
                  Cracking the Coding
                  <br />
                  Interview
                </TableCell>
                <TableCell align="center" className="t-head-cell">
                  LeetCode
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    backgroundColor: "#626ee3",
                  }}
                  className="t-head-cell"
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                    }}
                  >
                    <img
                      className="image"
                      src={LogoI}
                      alt=""
                      style={{ width: "45px" }}
                    />
                    AlgoExpert
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TableData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="left" className="body-cell body-cell-term">
                    <span>{item.term}</span>
                  </TableCell>
                  <TableCell className="body-cell">
                    <span
                      className="body-cell-ci"
                      style={{
                        backgroundColor: item.ci ? "#ebf7ee" : "#ffe5e5",
                        color: item.ci ? "green" : "red",
                      }}
                    >
                      {item.ci ? (
                        <CheckIcon />
                      ) : (
                        <CloseIcon
                          style={{
                            fontSize: "28px",
                          }}
                        />
                      )}
                    </span>
                  </TableCell>
                  <TableCell align="center" className="body-cell">
                    <span
                      className="body-cell-ci"
                      style={{
                        backgroundColor: item.lc ? "#ebf7ee" : "#ffe5e5",
                        color: item.lc ? "green" : "red",
                      }}
                    >
                      {item.lc ? (
                        <CheckIcon />
                      ) : (
                        <CloseIcon
                          style={{
                            fontSize: "28px",
                          }}
                        />
                      )}
                    </span>
                  </TableCell>
                  <TableCell align="center" className="body-cell">
                    <span
                      className="body-cell-ci"
                      style={{
                        backgroundColor: item.ae ? "#ebf7ee" : "#ffe5e5",
                        color: item.ae ? "green" : "red",
                      }}
                    >
                      {item.ae ? (
                        <CheckIcon />
                      ) : (
                        <CloseIcon
                          style={{
                            fontSize: "28px",
                          }}
                        />
                      )}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
