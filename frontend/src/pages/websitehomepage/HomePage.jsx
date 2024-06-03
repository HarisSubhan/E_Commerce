import React, { useState } from "react";
import HomePageHeader from "../../components/Homepage/HomePageHeader";
import NavBar from "../../components/Homepage/NavBar";
import Body from "../../components/Homepage/Body";
import ShoesCollection from "../../components/Homepage/ShoesCollection";
import ProductCollection from "../../components/Homepage/ProductCollection";

const HomePage = () => {
  return (
    <>
      <HomePageHeader />
      <NavBar />
      <Body />
      <ShoesCollection />
      <ProductCollection />
    </>
  );
};

export default HomePage;
