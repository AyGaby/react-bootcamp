import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Filter = () => {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, border: 1, bgColor: "#fff" }}>
      <FormControl fullWidth>
        <InputLabel id="select-task-state">Task state📃</InputLabel>
        <Select
          labelId="select-task-state"
          id="select-task-state"
          value={state}
          label="State"
          onChange={handleChange}
        >
          <MenuItem value="Completed">Completed✅</MenuItem>
          <MenuItem value="Not completed">Not completed❌</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
