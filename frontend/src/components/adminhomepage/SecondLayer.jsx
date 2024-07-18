import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { CardData } from "../../data/CardData";
import "bootstrap/dist/css/bootstrap.min.css";

const SecondLayer = () => {
  return (
    <div className="p-4">
      <Row className="g-3">
        {CardData?.map((item, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className="h-100 p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1">{item?.title}</p>
                  <p className="mb-1">{item?.order}</p>
                </div>
                <div>{item.icon}</div>
              </div>
              <div className="d-flex gap-3 mt-3">
                <p className="mb-0">{item?.data}</p>
                <p className="mb-0">{item?.session}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SecondLayer;
