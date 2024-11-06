import React, { useState } from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import NavBar from "../../components/Homepage/NavBar";
import { Form, ProgressBar, Table } from "react-bootstrap";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { CiStar } from "react-icons/ci";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { product } = useSelector((state) => state.product);

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
          {product.map((product, index) => {
            const product = getProductsByID.find(
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
                <h1 className="text-capitalize">{product?.title}</h1>
                <p>{product?.pra}</p>
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
                <h2>{product?.price}</h2>
                <p>{product?.detail}</p>
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
              <p className="p-3">{product?.description}</p>
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
                            <td>{product?.title}</td>
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
                    <div className="text-center ratings-summary w-100 w-md-50 p-4">
                      <h2>4.8</h2>
                      <p>Overall Rating</p>
                      <div className="d-flex mx-auto align-items-center">
                        <CiStar size={20} color="gold" />
                        <CiStar size={20} color="gold" />
                        <CiStar size={20} color="gold" />
                        <CiStar size={20} color="gold" />
                        <CiStar size={20} color="gold" />
                        <span className="ms-2">(9885 reviews)</span>
                      </div>

                      {/* Star Ratings Progress Bars */}
                      {[
                        { label: "5 Star", value: 980 },
                        { label: "4 Star", value: 184 },
                        { label: "3 Star", value: 244 },
                        { label: "2 Star", value: 121 },
                        { label: "1 Star", value: 32 },
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
            );
          })}
         
      </div>
    </>
  );
};

export default ProductDetail;
