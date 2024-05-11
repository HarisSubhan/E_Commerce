import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Registeruser from "./components/Registeruser";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/" element={<Registeruser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
