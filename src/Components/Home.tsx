import {
  Box,
  ListItem,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// import Buttons from "./Buttons";
// import Autocomplet from "./Autocomplete";
// import Clicks from "./Clicks";
import Sidemenu from "./Sidemenu";

function Home() {
  return (
    
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h3">
            Home
          </Typography>
        </Paper>
      </Box>
    
  );
}


export default Home;
