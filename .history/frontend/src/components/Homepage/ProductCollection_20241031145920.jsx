import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategorysData,
  getProductData,
} from "../../features/addProduct/addProductSlice";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function ProductCollection() {
  const { product, category } = useSelector((state) => state.product);
  const nav = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategorysData());
  }, [dispatch]);

  const handleClickProduct = (id) => {
    nav("/product-detail");
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {product?.slice(0, 8).map((product, index) => {
          const productCategory = category.find(
            (category) => category._id === product.category
          );
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <Box
                  onClick={handleClickProduct}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: { xs: 150, sm: 200, md: 250, lg: 300 },
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 200,
                      width: 200,
                      objectFit: "contain",
                    }}
                    image={product?.image}
                    title={product?.title}
                  />
                </Box>
                <CardContent className="text-center">
                  <Typography>{productCategory?.categoryname}</Typography>
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
          );
        })}
      </Grid>
    </Box>
  );
}
