import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const ConfirmationComponent = ({ label, data, confirmTransaction }) => {
  const truncateValue = (value) => {
    return value && value.length > 32
      ? value.slice(0, 15) + "..." + value.slice(-15)
      : value;
  };

  return (
    <>
      {label && (
        <Typography
          variant="h6"
          style={{ padding: "10px", textAlign: "center" }}
        >
          {label}
        </Typography>
      )}
      <TableContainer component={Paper}>
        <Table aria-label="confirmation table">
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="right">{truncateValue(item.value)}</TableCell>
              </TableRow>
            ))}
            {confirmTransaction && (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  <Button variant="contained" onClick={confirmTransaction}>
                    Confirm
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ConfirmationComponent;
