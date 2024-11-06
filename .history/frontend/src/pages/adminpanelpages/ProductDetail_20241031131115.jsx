import React from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import Sidenav from "../../components/adminhomepage/Sidenav";
import AppHeader from "../../components/adminhomepage/AppHeader";
import FirstLayer from "../../components/adminhomepage/FirstLayer";
import NavBar from "../../components/Homepage/NavBar";
import { CiStar } from "react-icons/ci";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";

const ProductDetail = () => {
  return (
    <>
      <HomePageHeader />
      <NavBar />
      <Card>
        <h3>Title</h3>
        <hr />
        <Container className="p-3">
          <Row>
            <Col md={6}>
              <Image
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
              <Button variant="primary">Add to Cart</Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={12}>
              <h3>Description</h3>
              <p>{/* Description content */}</p>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default ProductDetail;
