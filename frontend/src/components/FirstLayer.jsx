import React from "react";
import { Button } from "react-bootstrap";

const FirstLayer = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-4">
        <h1>Ecommerce</h1>
        <Button
          style={{ color: "#0B5ED7", borderBlockColor: "#0B5ED7" }}
          className="fw-bolder bg-transparent "
        >
          Today : 13-May-2024
        </Button>
      </div>
    </>
  );
};

export default FirstLayer;
