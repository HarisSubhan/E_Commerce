import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import Col from "react-bootstrap/esm/Col";

const ShoesCollection = () => {
  return (
    <>
      <div className="collection d-flex gap-4 p-3 mt-3 ">
        <Col>
          <Card className="d-flex justify-content-between p-4 ">
            <div className="">
              <Typography className="mt-3 fw-bolder" variant="h2">
                Shoes Collection!
              </Typography>
              <Typography className="mt-3 fs-1">
                Launch Offer 15% Off!
              </Typography>
              <Button className="mt-3" variant="contained">
                View Collection
              </Button>
            </div>
            <div className="mx-auto">
              <img
                width={250}
                src="https://mannatthemes.com/robotech/default/assets/images/products/pro-1.png"
                alt=""
              />
            </div>
          </Card>
        </Col>

        <Col>
          <Box>
            <Card className="d-flex justify-content-between p-4">
              <div className="">
                <Typography className="mt-3 fw-bolder" variant="h2">
                  T-Collection!
                </Typography>
                <Typography className="mt-3 fs-1">
                  Launch Offer 30% Off!
                </Typography>
                <Button className="mt-3" variant="contained">
                  View Collection
                </Button>
              </div>
              <img
                className="mx-auto"
                width={250}
                src="https://mannatthemes.com/robotech/default/assets/images/products/pro-1.png"
                alt=""
              />
            </Card>
          </Box>
        </Col>
      </div>
    </>
  );
};

export default ShoesCollection;
