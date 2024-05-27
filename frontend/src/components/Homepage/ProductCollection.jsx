import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CiStar } from "react-icons/ci";

export default function MediaCard() {
  return (
    <div className="d-flex p-3 gap-3 mt-3">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://mannatthemes.com/robotech/default/assets/images/products/01.png"
          title="green iguana"
        />
        <CardContent className="text-center">
          <Button>Electric</Button>
          <Typography gutterBottom variant="h5" component="div">
            Electric White Table Camera
          </Typography>
          <div className="d-flex justify-content-center">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            4.8
          </div>
          <Typography>$98</Typography>
        </CardContent>
        <CardActions>
          <Button>Buy Now</Button>
        </CardActions>
      </Card>
    </div>
  );
}
