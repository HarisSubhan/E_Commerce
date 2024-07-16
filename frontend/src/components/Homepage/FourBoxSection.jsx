import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { TbTruckDelivery } from "react-icons/tb";

function FourBoxSection() {
  return (
    <Container fluid className="py-5 bg-gray-800 text-white">
      <Row>
        <Col xs={12} md={3} className="text-center mb-4">
          <Card bg="transparent" border="warning">
            <Card.Body>
              <TbTruckDelivery />
              <Card.Title>Fast Delivery</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3} className="text-center mb-4">
          <Card bg="transparent" border="warning">
            <Card.Body>
              <Card.Title>Returns In 30 Days</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3} className="text-center mb-4">
          <Card bg="transparent" border="warning">
            <Card.Body>
              <Card.Title>Online Support 24/7</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3} className="text-center mb-4">
          <Card bg="transparent" border="warning">
            <Card.Body>
              <Card.Title>Secure Payment</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FourBoxSection;
