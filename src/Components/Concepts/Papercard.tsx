import {
    Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

function Papercard() {
  return (
    <Paper sx={{ width: 350 }}>
      <Card>
         <CardMedia
        component="img" 
        height="180"
        image="https://images.unsplash.com/photo-1481277542470-605612bd2d61"
        alt="Nature"
      />
        <CardContent>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos a
            commodi eum laborum quam id rerum fuga hic odio temporibus
            doloremque modi, neque sequi maxime, natus blanditiis porro ab
            aliquam.
          </Typography>
         <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default Papercard;
