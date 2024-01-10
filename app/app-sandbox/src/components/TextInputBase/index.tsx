import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { FormHelperText, InputLabel } from "@mui/material";

interface CustomizedInputBaseProps {
  onChange: any;
  label: string;
  type: string;
  value: string | number;
  error?: boolean;
  helperText?: React.ReactNode;
}

export default function CustomizedInputBase({
  value,
  onChange,
  label,
  type,
  error,
  helperText,
}: CustomizedInputBaseProps) {
  return (
    <>
      {label && <InputLabel error={error}>{label}</InputLabel>}
      <Paper
        elevation={1}
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          height: "3.4375em",
          position: 'relative',
          outline: theme => error ? `1px solid ${theme.palette.error.main}` : undefined,
        }}
      >
        <InputBase
          value={value}
          type={type}
          sx={{ ml: 1, flex: 1 }}
          onChange={onChange}
        />
        {helperText && (
          <FormHelperText
            error={error}
            sx={{
              position: 'absolute',
              left: 10,
              bottom: -28,
            }}
          >
            {helperText}
          </FormHelperText>
        )}
      </Paper>
    </>
  );
}
