import React, { useEffect, useState } from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import NavBar from "../../components/Homepage/NavBar";
import { Form, ProgressBar, Table } from "react-bootstrap";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductByID } from "../../features/addProduct/addProductSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, status, error } = useSelector((state) => state.product);

  const [activeSection, setActiveSection] = useState("description");

  const toggleSection = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? "" : section));
  };

  useEffect(() => {
    console.log("Fetching product with ID:", id); // Log the ID
    dispatch(getSingleProductByID(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  console.log("Product data:", product); // Log the product data

  return (
    <>
      <HomePageHeader />
      <NavBar />
      {product && (
        <div class Nam="p-3">
          <Card class Nam="mt-4 p-3">
            <h3>{product.title}</h3>
            <hr />
            <Container class Nam="mt-4">
              <Row>
                <Col md={6} class Nam="p-3 mt-4">
                  <Image
                    style={{ width: "80%", height: "80%" }}
                    src={product.images}
                    fluid
                  />
                </Col>
                <Col md={6}>
                  <h1 class Nam="text-capitalize">
                    {product?.title}
                  </h1>
                  <p>{product?.pra}</p>
                  <div class Nam="d-flex align-items-center">
                    <div class Nam="d-flex align-items-center">
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
                  <div class Nam="d-flex gap-3 ">
                    <Button variant="outline-secondary">0</Button>
                    <Button variant="primary">Add to Cart</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card>

          <div class Nam=" mt-4 d-flex gap-3">
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

          <Card class Nam="mt-4">
            {activeSection === "description" && (
              <div class Nam="section-content active p-3">
                <p>{product?.description}</p>
              </div>
            )}
            {activeSection === "additionalInfo" && (
              <Container>
                <Row>
                  <Table class Nam="mt-4" bordered responsive>
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
                    </tbody>
                  </Table>
                </Row>
              </Container>
            )}
            {activeSection === "ratingsReviews" && (
              <Container>
                <Row>
                  <div class Nam="d-flex flex-column flex-md-row p-4">
                    <div
                      class
                      Nam="text-center ratings-summary w-100 w-md-50 p-4"
                    >
                      <h2>4.8</h2>
                      <p>Overall Rating</p>

                      {[5, 4, 3, 2, 1].map((star) => (
                        <div
                          key={star}
                          class
                          Nam="d-flex align-items-center mt-2"
                        >
                          <span class Nam="me-2">
                            {star} Star
                          </span>
                          <ProgressBar
                            now={star * 20}
                            class
                            Nam="flex-grow-1 me-2"
                          />
                          <span>{star * 100}</span>
                        </div>
                      ))}
                    </div>
                    <div class Nam="review-form w-100 w-md-50 p-4">
                      <h5>Be the first to review "{product.title}"</h5>
                      <Form>
                        <Form.Group controlId="reviewName">
                          <Form.Label>Name *</Form.Label>
                          <Form.Control type="text" required />
                        </Form.Group>
                        <Button
                          variant="primary"
                          type="submit"
                          class
                          Nam="mt-3"
                        >
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </div>
                </Row>
              </Container>
            )}
          </Card>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
