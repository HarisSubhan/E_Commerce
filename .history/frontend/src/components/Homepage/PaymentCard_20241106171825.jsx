import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

const PaymentCard = ({ cardType, lastUsed, logo }) => {
  return (
    <Card
      className="p-4 mb-3"
      style={{ backgroundColor: "#f8f9fa", border: "none" }}
    >
      <div className="d-flex align-items-center mb-3">
        <img
          src={logo}
          alt={`${cardType} Logo`}
          style={{ width: "50px", marginRight: "10px" }}
        />
        <div>
          <h6 className="mb-0">{cardType}</h6>
          <small className="text-muted">Last time used: {lastUsed}</small>
        </div>
      </div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name of card:</Form.Label>
          <Form.Control placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Card No:</Form.Label>
          <Form.Control placeholder="---- ---- ---- ----" />
        </Form.Group>
        <Row className="mb-3">
          <Col>
            <Form.Label>Expiry Month</Form.Label>
            <Form.Select>
              <option>-- select --</option>
              {/* Add month options */}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Expiry Year</Form.Label>
            <Form.Select>
              <option>-- select --</option>
              {/* Add year options */}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>CVV</Form.Label>
            <Form.Control placeholder="CVV" />
          </Col>
        </Row>
        <Button variant="primary" className="w-100">
          Confirm payment $202.00
        </Button>
      </Form>
    </Card>
  );
};

const PaymentOptions = () => {
  return (
    <div className="d-flex justify-content-between">
      <PaymentCard
        cardType="Master Card"
        lastUsed="21 March 2023"
        logo="path-to-mastercard-logo.png"
      />
      <PaymentCard
        cardType="Visa Card"
        lastUsed="21 March 2023"
        logo="path-to-visa-logo.png"
      />
    </div>
  );
};

export default PaymentOptions;
