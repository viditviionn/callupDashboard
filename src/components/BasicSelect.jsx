import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: "20px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ marginBottom: "20px" }}>
          Days
        </InputLabel>
        <Box>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Age"
            onChange={handleChange}
            size="small"
            sx={{ width: "100px" }}
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={7}>Seven</MenuItem>
            <MenuItem value={15}>Fifteen</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
      </FormControl>
    </Box>
  );
}
