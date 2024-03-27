import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function TypeFilter({ onChange }) {
  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    onChange(type); // Pass the selected type to the parent component for filtering
  };

  return (
    <FormControl size="small" fullWidth>
      <InputLabel size="small" id="type-filter-label">
        Type
      </InputLabel>
      <Select
        size="small"
        labelId="type-filter-label"
        id="type-filter"
        value={selectedType}
        onChange={handleTypeChange}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Transfer">Transfer</MenuItem>
        <MenuItem value="Approval">Approval</MenuItem>
      </Select>
    </FormControl>
  );
}

export default TypeFilter;
