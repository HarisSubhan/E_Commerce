import React, { useState } from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import NavBar from "../../components/Homepage/NavBar";
import { Form, ProgressBar, Table } from "react-bootstrap";
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
              <p className="p-3">
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
                <Card>
                  <Container>
                    <Row>
                      <Table className="mt-4 " bordered responsive>
                        <tbody>
                          <tr>
                            <td>
                              <strong>BRAND NAME</strong>
                            </td>
                            <td>Robotech air zoom terra kiger 7</td>
                            <td>
                              <strong>DEPARTMENT</strong>
                            </td>
                            <td>Mens</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>SIZE</strong>
                            </td>
                            <td>UK 5</td>
                            <td>
                              <strong>ITEM WEIGHT</strong>
                            </td>
                            <td>400gm</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>COLOR</strong>
                            </td>
                            <td>Pink</td>
                            <td>
                              <strong>NET QUANTITY</strong>
                            </td>
                            <td>1 Set</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>COUNTRY</strong>
                            </td>
                            <td>USA</td>
                            <td>
                              <strong>CUSTOMER REVIEWS</strong>
                            </td>
                            <td>
                              <span style={{ color: "gold" }}>★★★★☆</span> 4.8
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Row>
                  </Container>
                </Card>
              </p>
            )}
          </div>
          <div
            className={`section-content ${
              activeSection === "ratingsReviews" ? "active" : ""
            }`}
          >
            {activeSection === "ratingsReviews" && (
              <Container>
                <Row>
                  <div className="d-flex flex-column flex-md-row p-4">
                    {/* Ratings Summary Section */}
                    <div className="ratings-summary w-100 w-md-50 p-4">
                      <h2>4.8</h2>
                      <p>Overall Rating</p>
                      <div className="d-flex align-items-center">
                        <CiStar size={20} color="gold" />
                        <CiStar size={20} color="gold" />
                        <CiStar size={20} color="gold" />
                        <CiStar size={20} color="gold" />
                        <CiStar size={20} color="gold" />
                        <span className="ms-2">(9885 reviews)</span>
                      </div>

                      {/* Star Ratings Progress Bars */}
                      {[
                        { label: "5 Star", value: 9180 },
                        { label: "4 Star", value: 84 },
                        { label: "3 Star", value: 24 },
                        { label: "2 Star", value: 12 },
                        { label: "1 Star", value: 3 },
                      ].map((rating, idx) => (
                        <div
                          key={idx}
                          className="d-flex align-items-center mt-2"
                        >
                          <span className="me-2">{rating.label}</span>
                          <ProgressBar
                            now={(rating.value / 9885) * 100}
                            className="flex-grow-1 me-2"
                          />
                          <span>{rating.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Review Form Section */}
                    <div className="review-form w-100 w-md-50 p-4">
                      <h5>Be the first to review "Robotech Shoe"</h5>
                      <Form>
                        <Form.Group controlId="reviewName">
                          <Form.Label>Name *</Form.Label>
                          <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Group controlId="reviewEmail" className="mt-3">
                          <Form.Label>Email *</Form.Label>
                          <Form.Control type="email" required />
                        </Form.Group>
                        <Form.Group controlId="reviewRating" className="mt-3">
                          <Form.Label>Your rating *</Form.Label>
                          <div className="d-flex">
                            {Array(5)
                              .fill()
                              .map((_, i) => (
                                <CiStar key={i} size={20} color="gold" />
                              ))}
                          </div>
                        </Form.Group>
                        <Form.Group controlId="reviewMessage" className="mt-3">
                          <Form.Label>Your message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Leave a comment..."
                          />
                        </Form.Group>
                        <Button
                          variant="primary"
                          type="submit"
                          className="mt-3"
                        >
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </div>
                </Row>
              </Container>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProductDetail;