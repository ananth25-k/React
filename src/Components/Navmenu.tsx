import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AccountCircle from "@mui/icons-material/AccountCircle";
import mobileData from "./Servies/Data";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Sidemenu from "./Sidemenu";
import "./Sidemenu.css";

const btStyle = { color: "yellowgreen", bgcolor: "black", display: "flex" };

function Navmenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: {
    currentTarget: React.SetStateAction<HTMLElement | null>;
  }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const columns: GridColDef<(typeof mobileData)[number]>[] = [
    { field: "id", headerName: "ID",flex:0.5},
    {
      field: "mobileName",
      headerName: " MObilename",
      flex:1,
      editable: true,
    },
    {
      field: "brand",
      headerName: "Brand",
       flex:1,
      editable: true,
    },
    {
      field: "modelName",
      headerName: "Model",
       flex:1,
      editable: true,
    },
    {
      field: "price",
      headerName: "price",
       flex:1,
      editable: true,
    },
  ];
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton size="large" edge="start">
            <AgricultureIcon></AgricultureIcon>
          </IconButton>
          <Typography variant="h6" component="div">
            Mobile
          </Typography>

          <Stack direction="row" spacing={2} sx={{ ml: "auto" }}>
            <Button sx={btStyle}>Home</Button>
            <Button sx={btStyle}>About</Button>
            <Button sx={btStyle}>Help</Button>
          </Stack>

          <IconButton size="large" edge="end" onClick={handleMenuOpen}>
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl} //
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Sidemenu children={undefined}></Sidemenu>
      <div className="main-content">
        <Box
          sx={{
            height: "100vh",
            mt: 10,
            backgroundImage:
              "url('https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            color: "#fff",
          }}
        ></Box>

        <Box sx={{  }}>
          <DataGrid
            rows={mobileData}
            columns={columns} 
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            // checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </>
  );
}

export default Navmenu;
