import React, { useEffect } from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Box, CardContent, CardMedia, Typography, Grid } from "@mui/material"; // Use MUI's Grid
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import {
  getCategorysData,
  getProductData,
} from "../../features/addProduct/addProductSlice";
import Footer from "./Footer";

export const Customersproducts = () => {
  const { product, category, status, error } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(getProductData())
      .unwrap()
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategorysData());
  }, [dispatch]);

  const handleClickProduct = (_id) => {
    nav(`/product-detail/${_id}`);
  };

  // Debugging: Log the fetched products and categories
  useEffect(() => {
    console.log("Products:", product);
    console.log("Categories:", category);
  }, [product, category]);

  return (
    <>
      <Header />
      <NavBar />
      <div className="mt-3 p-3">
        <Row>
          <Col xl={3}>
            <Card className="p-3">
              <Typography variant="h3">Filters</Typography>
              <hr />
              <Typography variant="h5">Categories</Typography>

              <div className="">
                {[...Array(5)].map((_, i) => (
                  <div className="d-flex gap-3 align-items-center" key={i}>
                    <MdOutlineCheckBoxOutlineBlank size={30} />
                    <Typography variant="h6">Category {i + 1}</Typography>
                  </div>
                ))}
              </div>
              <hr />
              <Typography variant="h5">Colors</Typography>
              <hr />
              <div className="">
                {[...Array(5)].map((_, i) => (
                  <div className="d-flex gap-3 align-items-center" key={i}>
                    <MdOutlineCheckBoxOutlineBlank size={30} />
                    <Typography variant="h6">Colors {i + 1}</Typography>
                  </div>
                ))}
              </div>
              <hr />
              <Typography variant="h5">Size</Typography>
              <hr />
              <div className="">
                {[...Array(5)].map((_, i) => (
                  <div className="d-flex gap-3 align-items-center" key={i}>
                    <MdOutlineCheckBoxOutlineBlank size={30} />
                    <Typography variant="h6">Colors {i + 1}</Typography>
                  </div>
                ))}
              </div>
              <hr />
              <Typography variant="h5">Rating</Typography>
              <hr />
              <div className="">
                {[...Array(5)].map((_, i) => (
                  <div className="d-flex gap-3 align-items-center" key={i}>
                    <MdOutlineCheckBoxOutlineBlank size={30} />
                    <Typography variant="h6">Colors {i + 1}</Typography>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
          <Col xl={9}>
            <Box sx={{ flexGrow: 1 }}>
              {status === "loading" && <p>Loading products...</p>}
              {status === "failed" && <p>Error fetching products: {error}</p>}
              {product && product.length > 0 ? (
                <Grid container spacing={3}>
                  {product.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                      <Card>
                        <Box
                          onClick={() => handleClickProduct(item._id)}
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
                            image={item.image || "path/to/placeholder.jpg"} // Use placeholder if no image
                            title={item.title}
                          />
                        </Box>
                        <CardContent className="text-center mt-3">
                          <Button variant="outline-secondary">
                            {category.find((cat) => cat._id === item.category)
                              ?.categoryname || "Unknown"}
                          </Button>
                          <Typography
                            className="text-capitalize mt-3"
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {item.title}
                          </Typography>
                          <div className="d-flex justify-content-center mt-3">
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            4.8
                          </div>
                          <Typography className="mt-3">
                            {item.price || "Price not available"}
                          </Typography>
                          <Button
                            className="mt-3"
                            sx={{ width: "100%" }}
                            variant="contained"
                          >
                            Buy Now
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <p>No products available.</p>
              )}
            </Box>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};
