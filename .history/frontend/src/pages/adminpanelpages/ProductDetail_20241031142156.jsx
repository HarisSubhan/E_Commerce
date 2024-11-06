import React, { useState } from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import NavBar from "../../components/Homepage/NavBar";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { CiStar } from "react-icons/ci";

const ProductDetail = () => {
  const [activeSection, setActiveSection] = useState("description");

  const toggleSection = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? "" : section));
  };

  return (
    <>
      <HomePageHeader />
      <NavBar />
      <div className="p-3">
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
                <h1 className="text-capitalize">
                  Robotech air zoom terra kiger 7 hiking colorful
                </h1>
                <p>Modern and good look model 2023.</p>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <CiStar size={20} />
                    <CiStar size={20} />
                    <CiStar size={20} />
                    <CiStar size={20} />
                    <CiStar size={20} />
                  </div>
                  <h5>(9,885 reviews)</h5>
                </div>
                <h2>$89.00</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't
                  look.
                </p>
                <div className="d-flex gap-3 ">
                  <Button variant="outline-secondary">0</Button>
                  <Button variant="primary">Add to Cart</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Card>

        <div className=" mt-4 d-flex gap-3">
          <Button
            variant="outline-secondary"
            onClick={() => toggleSection("description")}
          >
            Description
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => toggleSection("additionalInfo")}
          >
            Additional Info
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => toggleSection("ratingsReviews")}
          >
            Ratings & Reviews
          </Button>
        </div>
        <hr />

        <Card className="mt-4">
          <div
            className={`section-content ${
              activeSection === "description" ? "active" : ""
            }`}
          >
            {activeSection === "description" && (
              <p>
                Introducing Robotech, where innovation meets style to redefine
                your footwear experience.<br></br>At Robotech, we believe that
                every step you take should be a statement of comfort, quality,
                and fashion-forward design. Our collection of shoes is
                meticulously crafted to not only elevate your style but also
                provide the utmost comfort for your feet.
              </p>
            )}
          </div>
          <div
            className={`section-content ${
              activeSection === "additionalInfo" ? "active" : ""
            }`}
          >
            {activeSection === "additionalInfo" && (
              <p>
                {/* Additional Info content */}
                Sustainable Fashion: At Robotech, we're not just
                fashion-forward; we're also environmentally conscious.
                {/* Add the rest of the additional info content here */}
              </p>
            )}
          </div>
          <div
            className={`section-content ${
              activeSection === "ratingsReviews" ? "active" : ""
            }`}
          >
            {activeSection === "ratingsReviews" && (
              <p>
                {/* Ratings & Reviews content */}
                Affordable Luxury: We believe that luxury should be accessible.
                {/* Add the rest of the ratings & reviews content here */}
              </p>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProductDetail;
