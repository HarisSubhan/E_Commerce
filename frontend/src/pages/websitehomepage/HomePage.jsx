import React from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import NavBar from "../../components/Homepage/NavBar";
import Body from "../../components/Homepage/Body";
import ShoesCollection from "../../components/Homepage/ShoesCollection";
import ProductCollection from "../../components/Homepage/ProductCollection";
import Silder from "../../components/Homepage/Silder";
import HomeFooter from "../../components/Homepage/HomeFooter";
import FourBoxSection from "../../components/Homepage/FourBoxSection";

const HomePage = () => {
  return (
    <>
      <HomePageHeader />
      <NavBar />
      <Body />
      <ShoesCollection />
      <ProductCollection />
      <FourBoxSection />
      <Silder />
      <HomeFooter />
    </>
  );
};

export default HomePage;
