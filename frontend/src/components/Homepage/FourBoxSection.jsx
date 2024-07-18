import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { TbTruckDelivery } from "react-icons/tb";
import { TiArrowRepeat } from "react-icons/ti";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaWallet } from "react-icons/fa";

function FourBoxSection() {
  return (
    <Container fluid className="py-5 bg-gray-800 text-white">
      <Row>
        <Col xs={12} md={3} className=" mb-4">
          <Card bg="transparent" border="warning">
            <Card.Body>
              <TbTruckDelivery size={40} />
              <Card.Title>Fast Delivery</Card.Title>
              <Card.Text>
                It is a long established fact that a reader will be distracted.
                Contrary to popular belief.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3} className="mb-4">
          <Card bg="transparent" border="warning">
            <Card.Body>
              <TiArrowRepeat size={30} />
              <Card.Title>Returns In 30 Days</Card.Title>
              <Card.Text>
                It is a long established fact that a reader will be distracted.
                Contrary to popular belief.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3} className=" mb-4">
          <Card bg="transparent" border="warning">
            <Card.Body>
              <TfiHeadphoneAlt size={30} />
              <Card.Title>Online Support 24/7</Card.Title>
              <Card.Text>
                It is a long established fact that a reader will be distracted.
                Contrary to popular belief.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3} className=" mb-4">
          <Card bg="transparent" border="warning">
            <Card.Body>
              <FaWallet size={30} />
              <Card.Title>Secure Payment</Card.Title>
              <Card.Text>
                It is a long established fact that a reader will be distracted.
                Contrary to popular belief.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FourBoxSection;
