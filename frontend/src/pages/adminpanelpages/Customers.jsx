import React, { useEffect } from "react";
import Sidenav from "../../components/adminhomepage/Sidenav";
import { Col, Row } from "react-bootstrap";
import AppHeader from "../../components/adminhomepage/AppHeader";
import FirstLayer from "../../components/adminhomepage/FirstLayer";
import SelectOption from "../../components/adminlistproduct/SelectOption";
import CustomersRecord from "../../components/admin-customers/CustomersRecord";
import toast from "react-hot-toast";
import {
  customersReset,
  getCustomersData,
} from "../../features/customers/customersSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminProducts = () => {
  const { customers, customersError, customersMessage } = useSelector(
    (state) => state.customers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (customersError) {
      toast.error(customersMessage);
    } else {
      dispatch(getCustomersData());
    }
    dispatch(customersReset());
  }, [dispatch]);
  return (
    <Row className="d-flex">
      <Col className="p-0 m-0" xl={2} lg={5}>
        <Sidenav />
      </Col>
      <Col className="p-0 m-0" xl={10} lg={5}>
        <AppHeader />
        <FirstLayer />
        <SelectOption />
        <CustomersRecord />
      </Col>
    </Row>
  );
};

export default AdminProducts;
