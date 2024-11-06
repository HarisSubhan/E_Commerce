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
              <th>Product & Title</th>
              <th>Categories</th>
              <th>Stock status</th>
              <th>Attributes</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
        </Table>
      </Card>
    </>
  );
};
