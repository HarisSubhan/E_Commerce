import React from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import NavBar from "../../components/Homepage/NavBar";
import Body from "../../components/Homepage/Body";
import ShoesCollection from "../../components/Homepage/ShoesCollection";
import ProductCollection from "../../components/Homepage/ProductCollection";
import Silder from "../../components/Homepage/Silder";

import FourBoxSection from "../../components/Homepage/FourBoxSection";
import AuthForm from "../../components/Homepage/AuthForm";

const HomePage = () => {
  return (
    <>
      <HomePageHeader />
      {/* <AuthForm /> */}
      <NavBar />
      <Body />
      <ShoesCollection />
      <ProductCollection />
      <FourBoxSection />
      <Silder />
    </>
  );
};

export default HomePage;
