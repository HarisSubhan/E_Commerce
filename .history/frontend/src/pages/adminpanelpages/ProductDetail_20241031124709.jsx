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
      <div className="p-4">
        <Card className="p-3 mt-3">
          <div>Title</div>
          <hr />
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <img
                src="https://mannatthemes.com/robotech/default/assets/images/products/02.png"
                alt=""
                style={{ height: "80%", width: "60%" }}
              />
            </div>
            <div>
              <h1>Robotech air zoom terra kiger 7 hiking colorful</h1>
              <p style={{ color: "#02369F" }} className="">
                Morden and good look model 2023.
              </p>
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex   gap-2">
                  <CiStar size={25} />
                  <CiStar size={25} />
                  <CiStar size={25} />
                  <CiStar size={25} />
                  <CiStar size={25} />
                </div>
                <div>
                  <h5
                    className="d-flex  align-items-center"
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
                but the majority have suffered <br></br> alteration in some
                form, by injected humour, or randomised words which don't look.
              </p>
              <div className="d-flex gap-3 ">
                <Button variant="outline-secondary">0</Button>
                <Button style={{ backgroundColor: "#5C3DC3" }}>
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </Card>
        <div className="d-flex gap-3 mt-4">
          <h3>Description</h3>
          <h3>Additional Info</h3>
          <h3>Rating & reviews</h3>
        </div>
        <hr />
        <Card>
          <p>
            Introducing Robotech, where innovation meets style to redefine your
            footwear experience. At Robotech, we believe that every step you
            take should be a statement of comfort, quality, and fashion-forward
            design. Our collection of shoes is meticulously crafted to not only
            elevate your style but also provide the utmost comfort for your
            feet. Unparalleled Comfort: We understand that comfort is
            non-negotiable when it comes to footwear. That's why we've invested
            in the latest ergonomic technologies to ensure that each pair of
            Robotech shoes feels like a cloud beneath your feet. Whether you're
            navigating the urban jungle or embarking on a weekend adventure, our
            shoes are engineered to keep you comfortable throughout the day.
            Premium Quality: We're committed to excellence, which is why we use
            only the finest materials in our shoe production. From luxurious
            leathers to durable synthetics, every pair of Robotech shoes is
            built to withstand the test of time. Our meticulous craftsmanship
            and attention to detail guarantee that you're investing in shoes
            that will serve you well for years to come. Sustainable Fashion: At
            Robotech, we're not just fashion-forward; we're also environmentally
            conscious. We've embraced sustainable practices in our manufacturing
            process, using eco-friendly materials and minimizing waste. When you
            choose Robotech, you're not only choosing style; you're making a
            responsible choice for the planet. Versatile Style: Whether you're
            looking for sleek and sophisticated business attire or something
            casual for your weekend adventures, Robotech offers a wide range of
            styles to suit every occasion. From timeless classics to bold,
            statement-making designs, our collection has something for everyone.
            Affordable Luxury: We believe that luxury should be accessible.
            That's why we've worked tirelessly to provide you with high-quality
            shoes at prices that won't break the bank. Elevate your wardrobe
            without compromising your budget. Your Journey, Your Style: We
            understand that every individual's journey is unique, and your style
            should reflect that. That's why Robotech offers a wide range of
            sizes and customizable options to ensure that you find the perfect
            fit that complements your unique personality and lifestyle. Join us
            on this exciting journey as we redefine the way you experience
            footwear. Discover the perfect balance of comfort, quality, and
            style with Robotech. Step into a world where every step matters.
          </p>
        </Card>
      </div>
    </>
  );
};

export default ProductDetail;
