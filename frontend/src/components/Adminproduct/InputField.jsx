import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";

const InputField = ({
  setPreviewUrl,
  previewUrl,
  image,
  setImage,
  handleClose,
  uploadImage,
  handleImageChange,
}) => {
  return (
    <>
      <div
        style={{ height: "350px" }}
        className="image border position-relative"
      >
        <input
          onChange={handleImageChange}
          style={{ opacity: "0" }}
          type="file"
          className="position-absolute mx-auto p-5"
        />
        {previewUrl && (
          <RxCrossCircled
            onClick={handleClose}
            size={25}
            style={{ zIndex: "5555", position: "absolute", top: 10, left: 10 }}
          />
        )}
        {previewUrl && (
          <img
            className="position-absolute  mt-3"
            style={{
              height: "315px",
              width: "320px",
              objectFit: "fill",
              left: 28,
            }}
            src={previewUrl}
            alt=""
          />
        )}
        {!previewUrl && (
          <p className="p-5 fw-bolder">Drag & Drop your Files or Browse</p>
        )}
      </div>
    </>
  );
};

export default InputField;
