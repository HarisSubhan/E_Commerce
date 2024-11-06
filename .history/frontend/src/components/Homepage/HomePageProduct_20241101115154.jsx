import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getCategorysData,
  getProductData,
} from "../../features/addProduct/addProductSlice";
import { Grid } from "react-loader-spinner";
import { Button, Card } from "react-bootstrap";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CiStar } from "react-icons/ci";

export default function HomePageProduct() {
  const { product, category, status, error } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    console.log("Dispatching getProductData");
    dispatch(getProductData());
  }, [dispatch]);

  useEffect(() => {
    console.log("Dispatching getCategorysData");
    dispatch(getCategorysData());
  }, [dispatch]);

  const handleClickProduct = (_id) => {
    nav(`/product-detail/${_id}`);
  };

  console.log("Product data:", product);
  console.log("Category data:", category);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {status === "loading" && <p>Loading products...</p>}
      {status === "failed" && <p>Error fetching products: {error}</p>}
      {product && (
        <Grid container spacing={3}>
          {product?.slice(0, 8).map((product, index) => {
            const productCategory = category.find(
              (category) => category._id === product.category
            );

            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card>
                  <Box
                    onClick={() => handleClickProduct(product._id)}
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
      )}
    </Box>
  );
}
