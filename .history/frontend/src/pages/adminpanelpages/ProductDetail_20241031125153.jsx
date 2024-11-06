import React from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import Sidenav from "../../components/adminhomepage/Sidenav";
import { Button, Card, Col, Row } from "react-bootstrap";
import AppHeader from "../../components/adminhomepage/AppHeader";
import FirstLayer from "../../components/adminhomepage/FirstLayer";
import NavBar from "../../components/Homepage/NavBar";
import { CiStar } from "react-icons/ci";

const ProductDetail = () => {
  return (
    <>
      <HomePageHeader />
      <NavBar />
      <div className="container p-4">
        {" "}
        {/* Wrap content in a container */}
        <Card className="p-3 mt-3">
          <div>Title</div>
          <hr />
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            {" "}
            {/* Use flex-wrap for responsiveness */}
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://mannatthemes.com/robotech/default/assets/images/products/02.png"
                alt=""
                style={{ height: "auto", width: "100%" }}
              />
            </div>
            <div className="flex-grow-1">
              {" "}
              {/* Allow text content to grow */}
              <h1>Robotech air zoom terra kiger 7 hiking colorful</h1>
              <p style={{ color: "#02369F" }} className="">
                Morden and good look model 2023.
              </p>
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex gap-2">
                  <CiStar size={25} />
                  <CiStar size={25} />
                  <CiStar size={25} />
                  <CiStar size={25} />
                  <CiStar size={25} />
                </div>
                <div>
                  <h5
                    className="d-flex align-items-center"
                    style={{ fontWeight: "bolder" }}
                  >
                    4.5 (9,885 reviews)
                  </h5>
                </div>
              </div>
              <h2>$89.00</h2>
              <p style={{ fontWeight: "bolder" }} className="">
                Detail{" "}
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered <br /> alteration in some form,
                by injected humour, or randomised words which don't look.
              </p>
              <div className="d-flex gap-3">
                <Button variant="outline-secondary">0</Button>
                <Button style={{ backgroundColor: "#5C3DC3" }}>
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </Card>
        <div className="d-flex flex-wrap gap-3 mt-4">
          {" "}
          {/* Use flex-wrap for responsive layout of tabs */}
          <h3>Description</h3>
          <h3>Additional Info</h3>
          <h3>Rating & Reviews</h3>
        </div>
        <hr />
        <Card>
          <p>{/* Description content */}</p>
        </Card>
      </div>
    </>
  );
};

export default ProductDetail;
