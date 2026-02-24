import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function Autocomplet() {
  const [veachile, setVeachile] = useState<string | null>(null);
  const [val, setVal] = useState<company | null>(null);
  console.log(val);

  const cars = ["suzuki", "Benz", "Audi", "Mahindra", "tata"];
  const Bike = ["Honda","Royalen,field","Hero","Pulsar"]
  type company ={
    id: number,
    label: string
  }
  const sedon = Bike.map((comp,index)=>({
    id:index+1, 
    label:comp
  }))

  

  return (
    <>
      <Box>
        <Autocomplete
          options={cars}
          value={veachile}
          onChange={(_event: any, newValue: string | null) => {
            setVeachile(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Cars" />} 
          sx={{ width: 300 }}
        />
        <Autocomplete
          options={sedon}
          value={val}
          onChange={(_event: any, newValue: company | null) => {
          setVal(newValue);
        }}
          renderInput={(params) => <TextField {...params} label="Model Bikes" />}
          sx={{ width: 300 }}
        />
      </Box>
    </>
  );
}

export default Autocomplet;
