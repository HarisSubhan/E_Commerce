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
      <Card>
        <div>Title</div>
        <div className="d-flex justify-content-between  ">
          <div>
            <img
              src="https://img.freepik.com/free-psd/running-shoes-sneakers-transparent-background_84443-1639.jpg"
              alt=""
            />
          </div>
          <div>
            <h2>Robotech air zoom terra kiger 7 hiking colorful</h2>
            <p>Morden and good look model 2023.</p>
            <h3>$89.00</h3>
            <p>Detail </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look.
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProductDetail;
