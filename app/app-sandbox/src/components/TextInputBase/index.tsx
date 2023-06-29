import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { InputLabel } from "@mui/material";

interface CustomizedInputBaseProps {
  onChange: any;
  label: string;
  type: string;
  value: string | number;
}

export default function CustomizedInputBase({
  value,
  onChange,
  label,
  type,
}: CustomizedInputBaseProps) {
  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}
      <Paper
        elevation={1}
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          height: "3.4375em",
        }}
      >
        <InputBase
          value={value}
          type={type}
          sx={{ ml: 1, flex: 1 }}
          onChange={onChange}
        />
      </Paper>
    </>
  );
}
