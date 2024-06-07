import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../features/addProduct/addProductSlice";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function ProductCollection() {
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {product?.slice(0, 8).map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardMedia
                sx={{
                  height: { xs: 150, sm: 200, md: 250, lg: 300 },
                  objectFit: "cover",
                }}
                image={product?.image}
                title={product?.title}
              />
              <CardContent className="text-center">
                <Button>Electric</Button>
                <Typography gutterBottom variant="h5" component="div">
                  {product?.description}
                </Typography>
                <div className="d-flex justify-content-center">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  4.8
                </div>
                <Typography>{product?.price}</Typography>
                <Button sx={{ width: "100%" }} variant="contained">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
