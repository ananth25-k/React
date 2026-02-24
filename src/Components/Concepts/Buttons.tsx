import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

function Buttons() {
  const [value, setValue] = useState("");
  const [form, setForm] = useState(false);
  const [check, setCheck] = useState<string[]>([]);
  const [gender, setGender] = useState<string>("");

  console.log(value);
  console.log(check);
  console.log(gender);
  
  console.log();
  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const chekchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(event.target.checked);
  };
  const GroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const v = event.target.value; // use the checkbox's value
    setCheck((prev) => {
      if (!prev.includes(v)) {
        return [...prev, v]; // add
      }
      return prev.filter((c) => c !== v); // remove
    });
  };
  const radioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setGender((event.target as HTMLInputElement).value);
  };

  return (
    <>
      {/* // Drop down */}
      <Box sx={{ mb: 3 }}>
         <Paper elevation={5} sx={{display:"flex",alignContent:"normal"}}>
        <TextField
          label="Select a country"
          select
          value={value}
          onChange={change}
          sx={{ width: 500 }}
        >
          <MenuItem value="us">us </MenuItem>
          <MenuItem value="ind">India </MenuItem>
          <MenuItem value="rse">russia </MenuItem>
        </TextField>
        {/* // checkbox  */}
        <Box sx={{ mt: 3 }}>
          <FormControl>
            <FormControlLabel
              label="terms and conditions"
              control={
                <Checkbox checked={form} onChange={chekchange}></Checkbox>
              }
            />
            <FormLabel> Skills</FormLabel>
            <FormGroup>
              <FormControlLabel
                label="Js"
                value="js"
                control={
                  <Checkbox
                    checked={check.includes("js")}
                    onChange={GroupChange}
                  ></Checkbox>
                }
              />
              <FormControlLabel
                label="Html"
                value="html"
                control={
                  <Checkbox
                    checked={check.includes("html")}
                    onChange={GroupChange}
                  ></Checkbox>
                }
              />
              <FormControlLabel
                label="Angular"
                value="Angular"
                control={
                  <Checkbox
                    checked={check.includes("Angular")}
                    onChange={GroupChange}
                  ></Checkbox>
                }
              />
            </FormGroup>
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" value={gender} onChange={radioChange}>
            <FormControlLabel
              label="Male"
              value="Male"
              control={<Radio></Radio>}
            />
            <FormControlLabel
              label="female"
              value="female"
              control={<Radio></Radio>}
            />
            <FormControlLabel
              label="Other"
              value="Other"
              control={<Radio></Radio>}
            />
          </RadioGroup>
        </FormControl>
        <Box></Box>
        </Paper>

      </Box>
    </>
  );
}

export default Buttons;
