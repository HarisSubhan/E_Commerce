import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import CircleChart from "./CircleChart";

const ThirdLayer = () => {
  return (
    <>
      <Row className="d-flex p-4">
        <Col xl={5} lg={4} md={6}>
          <Row className="p-2">
            <Col xl={3} lg={4} md={6}>
              <img
                className="card-image"
                width={150}
                src="https://mannatthemes.com/robotech/default/assets/images/widgets/user.png"
                alt=""
              />
            </Col>
            <Col xl={9} lg={8} md={6}>
              <h3>
                A Guide to Analyze and <br></br>Optimize Your Online <br></br>
                Business
              </h3>
            </Col>
          </Row>

          <div className="d-flex gap-4"></div>
          <div className="pie mt-4">
            <CircleChart />
          </div>
          <div class="text-center mt-3">
            <button
              style={{
                border: "1px solid gray",
                backgroundColor: "transparent",
              }}
              class="btn text-black"
            >
              01 January 2023 to 31 December 2024
            </button>
          </div>
        </Col>
        <Col xl={7} lg={8} md={6}>
          <div className="d-flex justify-content-between p-4">
            <h4>Sale Reports</h4>
            <Button>This Month</Button>
          </div>
          <div>{/* <LineChartCard /> */}</div>
        </Col>
      </Row>
    </>
  );
};

export default ThirdLayer;
