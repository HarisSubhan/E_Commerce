import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Typography } from "@mui/material";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { Grid } from "react-loader-spinner";
import { useSelector } from "react-redux";

export const Customersproducts = () => {
  const { product } = useSelector((state) => state.product);

  return (
    <>
      <Header />
      <NavBar />
      <Container className="mt-3">
        <Row>
          <Col xl={4}>
            <Card className="p-3">
              <Typography variant="h3">Filters</Typography>
              <hr />
              <Typography variant="h5">Categories</Typography>
              <div className="">
                <div className="d-flex gap-3 align-items-center">
                  <MdOutlineCheckBoxOutlineBlank size={30} />
                  <Typography variant="h6">Fashion</Typography>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <MdOutlineCheckBoxOutlineBlank size={30} />
                  <Typography variant="h6">Fashion</Typography>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <MdOutlineCheckBoxOutlineBlank size={30} />
                  <Typography variant="h6">Fashion</Typography>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <MdOutlineCheckBoxOutlineBlank size={30} />
                  <Typography variant="h6">Fashion</Typography>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <MdOutlineCheckBoxOutlineBlank size={30} />
                  <Typography variant="h6">Fashion</Typography>
                </div>
              </div>
            </Card>
          </Col>
          <Col xl={8}>
            <div>
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
                        <CardContent className="text-center mt-3">
                          <Button variant="outline-secondary">
                            {productCategory?.categoryname}
                          </Button>
                          <Typography
                            className="text-capitalize mt-3"
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {product?.title}
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
                            {product?.price}
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
                  );
                })}
              </Grid>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
