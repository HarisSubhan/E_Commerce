import React from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import NavBar from "../../components/Homepage/NavBar";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";

const ProductDetail = () => {
  return (
    <>
      <HomePageHeader />
      <NavBar />
      <Card className="mt-4 p-3">
        <h3>Title</h3>
        <hr />
        <Container className="mt-4">
          <Row>
            <Col md={6} className="p-3 mt-4">
              <Image
                style={{ width: "80%", height: "80%" }}
                src="https://mannatthemes.com/robotech/default/assets/images/products/02.png"
                fluid
              />
            </Col>
            <Col md={6}>
              <h1>Robotech air zoom terra kiger 7 hiking colorful</h1>
              <p>Morden and good look model 2023.</p>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
                <p>(9,885 reviews)</p>
              </div>
              <h2>$89.00</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
              <Button variant="outline-secondary">0</Button>
              <Button variant="primary">Add to Cart</Button>
            </Col>
          </Row>
        </Container>
      </Card>

      <Row className="mt-4">
        <Col md={12}>
          <h3>Description</h3>
          <p>{/* Description content */}</p>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetail;
