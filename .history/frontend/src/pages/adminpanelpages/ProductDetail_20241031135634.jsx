import React, { useState } from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import NavBar from "../../components/Homepage/NavBar";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { CiStar } from "react-icons/ci";

const ProductDetail = () => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isAdditionalInfoExpanded, setIsAdditionalInfoExpanded] =
    useState(false);
  const [isRatingsReviewsExpanded, setIsRatingsReviewsExpanded] =
    useState(false);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const toggleAdditionalInfo = () => {
    setIsAdditionalInfoExpanded(!isAdditionalInfoExpanded);
  };

  const toggleRatingsReviews = () => {
    setIsRatingsReviewsExpanded(!isRatingsReviewsExpanded);
  };

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
              <h1 className="text-capitalize">
                Robotech air zoom terra kiger 7 hiking colorful
              </h1>
              <p>Morden and good look model 2023.</p>
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
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
              <div className="d-flex gap-3 ">
                <Button variant="outline-secondary">0</Button>
                <Button variant="primary">Add to Cart</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>

      <div className="product-details">
        <div className="section-header">
          <button onClick={toggleDescription}>Description</button>
          <button onClick={toggleAdditionalInfo}>Additional Info</button>
          <button onClick={toggleRatingsReviews}>Ratings & Reviews</button>
        </div>
        <div
          className={`section-content ${isDescriptionExpanded ? "active" : ""}`}
        >
          Introducing Robotech, where innovation meets style to redefine your
          footwear experience. At Robotech, we believe that every step you take
          should be a statement of comfort, quality, and fashion-forward design.
          Our collection of shoes is meticulously crafted to not only elevate
          your style but also provide the utmost comfort for your feet.
          Unparalleled Comfort: We understand that comfort is non-negotiable
          when it comes to footwear. That's why we've invested in the latest
          ergonomic technologies to ensure that each pair of Robotech shoes
          feels like a cloud beneath your feet. Whether you're navigating the
          urban jungle or embarking on a weekend adventure, our shoes are
          engineered to keep you comfortable throughout the day. Premium
          Quality: We're committed to excellence, which is why we use only the
          finest materials in our shoe production. From luxurious leathers to
          durable synthetics, every pair of Robotech shoes is built to withstand
          the test of time. Our meticulous craftsmanship and attention to detail
          guarantee that you're investing in shoes that will serve you well for
          years to come.
        </div>
        <div
          className={`section-content ${
            isAdditionalInfoExpanded ? "active" : ""
          }`}
        >
          Sustainable Fashion: At Robotech, we're not just fashion-forward;
          we're also environmentally conscious. We've embraced sustainable
          practices in our manufacturing process, using eco-friendly materials
          and minimizing waste. When you choose Robotech, you're not only
          choosing style; you're making a responsible choice for the planet.
          Versatile Style: Whether you're looking for sleek and sophisticated
          business attire or something casual for your weekend adventures,
          Robotech offers a wide range of styles to suit every occasion. From
          timeless classics to bold, statement-making designs, our collection
          has something for everyone.
        </div>
        <div
          className={`section-content ${
            isRatingsReviewsExpanded ? "active" : ""
          }`}
        >
          Affordable Luxury: We believe that luxury should be accessible. That's
          why we've worked tirelessly to provide you with high-quality shoes at
          prices that won't break the bank. Elevate your wardrobe without
          compromising your budget. Your Journey, Your Style: We understand that
          every individual's journey is unique, and your style should reflect
          that. That's why Robotech offers a wide range of sizes and
          customizable options to ensure that you find the perfect fit that
          complements your unique personality and lifestyle. Join us on this
          exciting journey as we redefine the way you experience footwear.
          Discover the perfect balance of comfort, quality, and style with
          Robotech. Step into a world where every step matters.
        </div>
      </div>
    </>
  );
};

export default ProductDetail;