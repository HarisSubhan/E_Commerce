import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Card, Table } from "react-bootstrap";

export const CustomersWishlist = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Card>
        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
        </Table>
      </Card>
    </>
  );
};
