import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeFooter = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <div className="mb-4">
              <img
                src="logo.png"
                alt="Robotech"
                className="mb-2"
                style={{ width: "150px" }}
              />
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </Col>
          <Col md={2}>
            <h5>Customers</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Product details</li>
              <li>Cart</li>
              <li>Checkout</li>
              <li>Wishlist</li>
              <li>Invoice</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Admin</h5>
            <ul className="list-unstyled">
              <li>Dashboard</li>
              <li>Add product</li>
              <li>Orders</li>
              <li>Customers</li>
              <li>Order details</li>
              <li>Refund</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              1884 George Avenue
              <br />
              Mobile, AL 36603
            </p>
            <div className="d-flex">
              <a href="#" className="text-light me-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <p>&copy; 2024 Robotech</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>Crafted with by Mannatthemes</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default HomeFooter;
