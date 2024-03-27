import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({onChange}) => {
  return (
    <TextField
      size="small"
      label="Search"
      type="search"
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onChange={onChange}
      
      // You can add other props and event handlers as needed
    />
  );
};

export default SearchInput;
