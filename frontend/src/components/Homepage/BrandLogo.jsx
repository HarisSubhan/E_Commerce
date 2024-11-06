import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BrandLogo = () => {
  return (
    <Container fluid className="brands-section text-center py-5">
      <h2 className="mb-2">Most Popular Brands</h2>
      <p className="mb-4">All brand offers start 25 Dec.</p>
      <Row className="justify-content-center">
        <Col xs={6} md={2} className="brand-logo">
          <img
            src="https://mannatthemes.com/robotech/default/assets/images/products/bl-1.png"
            alt="Metrica"
          />
        </Col>
        <Col xs={6} md={2} className="brand-logo">
          <img
            src="https://mannatthemes.com/robotech/default/assets/images/products/bl-2.png"
            alt="Namelogo"
          />
        </Col>
        <Col xs={6} md={2} className="brand-logo">
          <img
            src="https://mannatthemes.com/robotech/default/assets/images/products/bl-3.png"
            alt="Eagle"
          />
        </Col>
        <Col xs={6} md={2} className="brand-logo">
          <img
            src="https://mannatthemes.com/robotech/default/assets/images/products/bl-1.png"
            alt="Metrica"
          />
        </Col>
        <Col xs={6} md={2} className="brand-logo">
          <img
            src="https://mannatthemes.com/robotech/default/assets/images/products/bl-1.png"
            alt="Company"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BrandLogo;
