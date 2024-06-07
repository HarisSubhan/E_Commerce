import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Sidenav from "../../components/adminhomepage/Sidenav";
import AppHeader from "../../components/adminhomepage/AppHeader";
import FirstLayer from "../../components/adminhomepage/FirstLayer";
import { Box, Paper, TableBody, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import {
  getCategorysData,
  productReset,
  uploadAddcategory,
} from "../../features/addProduct/addProductSlice";
import toast from "react-hot-toast";
import GetCategory from "../../components/admincategory/GetCategory";

const AdminAddCategory = () => {
  const [formFiels, setFormFields] = useState({
    categoryname: "",
    categorydescription: "",
  });
  const dispatch = useDispatch();
  const { categoryname, categorydescription } = formFiels;

  const { productMessage, categorySuccess, categoryError, message } =
    useSelector((state) => state.product);

  useEffect(() => {
    if (categorySuccess) {
      toast.success(productMessage);
    }
    dispatch(productReset());
  }, [categorySuccess, productMessage]);

  useEffect(() => {
    if (categoryError) {
      toast.error(message);
    }
    dispatch(productReset());
  }, [categoryError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (categoryError) {
      toast.error(productMessage);
    } else {
      dispatch(getCategorysData());
    }
    dispatch(productReset());
  }, [dispatch]);

  const handleClick = () => {
    if (!categoryname) {
      toast.error("Please Enter a category Name");
      return;
    }
    const categorydata = {
      categoryname,
      categorydescription,
    };
    try {
      dispatch(uploadAddcategory(categorydata));
      console.log("Category added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <Row className="d-flex">
        <Col className="p-0 m-0" xl={2} lg={5}>
          <Sidenav />
        </Col>
        <Col className="p-0 m-0" xl={10} lg={5}>
          <AppHeader />
          <FirstLayer />
          <Row className="p-5 m-0">
            <Col xl={4} lg={12} md={12} className="">
              <Card className="p-3" sx={{}}>
                <Typography className="text-center" variant="h4">
                  Add Category
                </Typography>
                <hr />
                <label>Add Category Name</label>
                <Form.Control
                  onChange={handleChange}
                  value={categoryname}
                  name="categoryname"
                  aria-label="Add Category Name"
                />
                <p>The name is how it appears on your site.</p>
                <label>Description</label>
                <Form.Control
                  onChange={handleChange}
                  value={categorydescription}
                  name="categorydescription"
                  placeholder="Optional"
                />
                <p>
                  The description is not prominent by default; however, some
                  themes may show it.
                </p>
                <Button onClick={handleClick} className="mt-3">
                  Add New Category
                </Button>
              </Card>
            </Col>
            <Col xl={8} lg={12} md={12}>
              <GetCategory />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AdminAddCategory;
