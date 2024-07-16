import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";

const Body = () => {
  return (
    <>
      <div className="bg-soft-gradient d-flex body justify-content-center align-items-center p-3   ">
        <Col>
          <Box className="justify-content-center  content-wrapper mt-3 p-4 mx-auto">
            <Button
              className="p-3 "
              variant="outlined"
              sx={{ backgroundColor: "#FFC728", color: "#ffffff" }}
            >
              Free Shipping - orders over $100
            </Button>
            <Typography className="mt-3 " variant="h1">
              Limited Time Offer!
            </Typography>
            <Typography className="mt-3" variant="h3">
              Up To 50% OFF
            </Typography>
            <Typography className="mt-3" variant="h6">
              Introduced a new model for online grocery shopping and convenient
              home delivery.
            </Typography>
            <Button className="mt-4" variant="outlined">
              Explore Store{" "}
            </Button>
          </Box>
        </Col>
        <Col>
          <Box className="mx-auto">
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://mannatthemes.com/robotech/default/assets/images/products/pro-4.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://mannatthemes.com/robotech/default/assets/images/products/pro-3.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://mannatthemes.com/robotech/default/assets/images/products/pro-4.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Box>
        </Col>
      </div>
    </>
  );
};

export default Body;
