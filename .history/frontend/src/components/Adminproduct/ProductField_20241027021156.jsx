import React from "react";

const ProductField = ({ previewUrl, formFields, setFormFields }) => {
  return (
    <>
      <div>
        <div>
          <img width={350} src={previewUrl} alt="" />
        </div>
        <div className="mt-3">
          <p className="p-0 m-0">Product Title</p>
          <h6>{formFields.title}</h6>
        </div>
        <div className="mt-3">
          <p className="p-0 m-0">Tag Line/p>
          <h6>{formFields.title}</h6>
        </div>
        <div className="mt-3">
          <p className="p-0 m-0">Category</p>
          <h6>{formFields.Category}</h6>
        </div>
        <div className="mt-3">
          <p className="p-0 m-0">Description</p>
          <h6>{formFields.description}</h6>
        </div>
        <div className="mt-3">
          <p className="p-0 m-0">Pro. Date</p>
          <h6>{formFields.date}</h6>
        </div>
        <div className="mt-3">
          <p className="p-0 m-0">For this product</p>
          <h6>{formFields.gender}</h6>
        </div>
        <div className="mt-3">
          <p className="p-0 m-0">Size</p>
          <h6>{formFields.size}</h6>
        </div>
      </div>
    </>
  );
};

export default ProductField;
