import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/websitehomepage/HomePage.jsx";
import Registeruser from "../src/components/Registeruser.jsx";
import SignupUser from "../src/components/SignupUser.jsx";
import AdminAddProduct from "./pages/adminpanelpages/AdminAddProduct.jsx";
import Customers from "./pages/adminpanelpages/Customers.jsx";
import Orders from "./pages/adminpanelpages/Orders.jsx";
import OrdersDetail from "./pages/adminpanelpages/OrdersDetail.jsx";
import ProductDetail from "./pages/adminpanelpages/ProductDetail.jsx";
import Refunds from "./pages/adminpanelpages/Refunds.jsx";
import AdminHomePage from "./pages/adminpanelpages/AdminHomePage.jsx";
import AdminProducts from "./pages/adminpanelpages/AdminProducts.jsx";
import AdminAddCategory from "./pages/adminpanelpages/AdminAddCategory.jsx";
import CustomersDetails from "./pages/adminpanelpages/CustomersDetails.jsx";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user.role === "admin";
  return (
    <>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register-user" element={<Registeruser />} />
          <Route path="/login" element={<SignupUser />} />
          {isAdmin ? (
            <>
              <Route path="/admin" element={<AdminHomePage />} />
              <Route path="/admin-add-product" element={<AdminAddProduct />} />
              <Route
                path="/admin-add-category"
                element={<AdminAddCategory />}
              />
              <Route path="/admin-products" element={<AdminProducts />} />
              <Route path="/admin-customers" element={<Customers />} />
              <Route
                path="/admin-customers-details"
                element={<CustomersDetails />}
              />
              <Route path="/admin-orders" element={<Orders />} />
              <Route path="/admin-orders-details" element={<OrdersDetail />} />
              <Route
                path="/admin-product-details"
                element={<ProductDetail />}
              />
              <Route path="/admin-refunds" element={<Refunds />} />
            </>
          ) : (
            // Redirect to home page if not admin
            <Route path="/admin" element={<Navigate to="/" replace />} />
          )}
          <Route path="*" element="No Page Found" />
        </Routes>
      </Router>
    </>
  );
}
export default App;
