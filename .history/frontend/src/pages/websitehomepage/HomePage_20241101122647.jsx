import React from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import NavBar from "../../components/Homepage/NavBar";
import Body from "../../components/Homepage/Body";
import ShoesCollection from "../../components/Homepage/ShoesCollection";
import FourBoxSection from "../../components/Homepage/FourBoxSection";
import BrandLogo from "../../components/Homepage/BrandLogo";
import Footer from "../../components/Homepage/Footer";
import ProductCollection from "../../components/Homepage/ProductCollection";

const HomePage = () => {
  return (
    <>
      <HomePageHeader />
      <NavBar />
      <Body />
      <ShoesCollection />
      <BrandLogo />
      <ProductCollection />
      {/* <HomePageProduct /> */}
      <FourBoxSection />
      <Footer />
    </>
  );
};

export default HomePage;
