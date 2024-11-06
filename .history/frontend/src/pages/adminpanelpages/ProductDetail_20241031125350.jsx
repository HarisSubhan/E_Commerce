import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const ProductDetail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Image
            src="https://mannatthemes.com/robotech/default/assets/images/products/02.png"
            fluid
          />
        </div>
        <div className="col-md-6">
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
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look.
          </p>
          <Button variant="primary">Add to Cart</Button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Description</h3>
          <p>{/* Description content */}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
