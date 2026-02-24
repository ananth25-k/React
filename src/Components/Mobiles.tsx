import React, { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";

interface Mobile {
  id: number;
  productId: number;
  brand: string;
  camera: string;
  Proccesor: string; // keeping same as backend response
}

function Mobiles() {
  const [mobiles, setMobiles] = useState<Mobile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMobiles();
  }, []);

  const fetchMobiles = async () => {
    try {
      const response = await axios.get("http://localhost:8080/mobiles/allMobiles");
      setMobiles(response.data.data); // because backend response has "data": []
    } catch (error) {
      console.error("Error fetching mobiles:", error);
    } finally {
      setLoading(false);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "productId", headerName: "Product ID", width: 120 },
    { field: "brand", headerName: "Brand", flex: 1 },
    { field: "camera", headerName: "Camera", flex: 1 },
    { field: "Proccesor", headerName: "Processor", flex: 1 },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Mobiles List
      </Typography>

      <Paper elevation={3} sx={{ height: 450, width: "100%", p: 2 }}>
        <DataGrid
          rows={mobiles}
          columns={columns}
          loading={loading}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
        />
      </Paper>
    </Box>
  );
}

export default Mobiles;