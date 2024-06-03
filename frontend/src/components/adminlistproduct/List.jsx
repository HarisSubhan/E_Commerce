import React from "react";
import { Col } from "react-bootstrap";

const List = () => {
  return (
    <>
      <div className="d-flex text-center justify-content-around">
        <Col>
          <h5>All</h5>
        </Col>
        <Col>
          <h5>Publish</h5>
        </Col>
        <Col>
          <h5>Drafts</h5>
        </Col>
        <Col>
          <h5>On Discounts</h5>
        </Col>
      </div>
    </>
  );
};

export default List;
