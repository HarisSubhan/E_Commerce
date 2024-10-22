import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  const [userRole, setUserRole] = useState(null);

  // useEffect(() => {

  //   const fetchUserRole = async () => {
  //     try {
  //       const response = await getUserRole(); // Replace with your API call
  //       setUserRole(response.data.role);
  //     } catch (error) {
  //       console.error("Error fetching user role:", error);
  //     }
  //   };
  //   fetchUserRole();
  // }, []);
  return (
    <>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/admin-add-product" element={<AdminAddProduct />} />
          <Route path="/admin-add-category" element={<AdminAddCategory />} />
          <Route path="/admin-products" element={<AdminProducts />} />
          <Route path="/admin-customers" element={<Customers />} />
          <Route
            path="/admin-customers-details"
            element={<CustomersDetails />}
          />
          <Route path="/admin-orders" element={<Orders />} />
          <Route path="/admin-orders-details" element={<OrdersDetail />} />
          <Route path="/admin-product-details" element={<ProductDetail />} />
          <Route path="/admin-refunds" element={<Refunds />} />
          {/* {userRole === "admin" && (
            <>
              <Route path="/admin" element={<AdminHomePage />} />
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
          )} */}
          <Route path="/register-user" element={<Registeruser />} />
          <Route path="/login" element={<SignupUser />} />
          <Route path="*" element="No Page Found" />
        </Routes>
      </Router>
    </>
  );
}
export default App;
