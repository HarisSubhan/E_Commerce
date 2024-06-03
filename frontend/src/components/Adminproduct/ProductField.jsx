import React from "react";

const ProductField = ({ previewUrl }) => {
  return (
    <>
      <div>
        <div>
          <img width={350} src={previewUrl} alt="" />
        </div>
        <div className="mt-3">
          <p className="p-0 m-0">Product Title</p>
          <h6>Mannat HD, Smart LED Fire TV</h6>
        </div>
        <div className="mt-3">
          <p className="p-0 m-0">Description</p>
          <h6>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </h6>
        </div>
        <div className="mt-3">
          <p className="p-0 m-0">Pro. Date</p>
          <h6>02/05/2023</h6>
        </div>
        <div className="mt-3">
          <p className="p-0 m-0">For this product</p>
          <h6>Other</h6>
        </div>
        <div className="mt-3">
          <p className="p-0 m-0">Size</p>
          <h6>SM, MD, LG, XL</h6>
        </div>
      </div>
    </>
  );
};

export default ProductField;
