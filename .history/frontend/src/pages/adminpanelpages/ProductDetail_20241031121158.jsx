import React from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import Sidenav from "../../components/adminhomepage/Sidenav";
import { Card, Col, Row } from "react-bootstrap";
import AppHeader from "../../components/adminhomepage/AppHeader";
import FirstLayer from "../../components/adminhomepage/FirstLayer";
import NavBar from "../../components/Homepage/NavBar";

const ProductDetail = () => {
  return (
    <>
      <HomePageHeader />
      <NavBar />
      <div className="p-4">
        <Card className="p-3 mt-3">
          <div>Title</div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img
                src="https://mannatthemes.com/robotech/default/assets/images/products/02.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div>
              <h2>Robotech air zoom terra kiger 7 hiking colorful</h2>
              <p>Morden and good look model 2023.</p>
              <h3>$89.00</h3>
              <p>Detail </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered <br></br> alteration in some
                form, by injected humour, or randomised words which don't look.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProductDetail;
