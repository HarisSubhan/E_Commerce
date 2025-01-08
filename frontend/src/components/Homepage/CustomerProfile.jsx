import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Button, Card, Col, Table } from "react-bootstrap";
import { IoLocation } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import { useSelector } from "react-redux";

const CustomerProfile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      <NavBar />
      <div className="d-flex gap-3 p-5">
        <Col lg={8}>
          <Card>
            <div className="d-flex m-4">
              <Button variant="text">My Order</Button>
              <Button variant="outline">Reviews</Button>
              <Button variant="outline">Coupons</Button>
            </div>
            <Table className="">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product & Title</th>
                  <th>Delivery Method</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Payment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>johndoe@example.com</td>
                  <td>123-456-7890</td>
                  <td>123 Main St, City, State, ZIP</td>
                  <td>123 Main St, City, State, ZIP</td>
                  <td>123 Main St, City, State, ZIP</td>
                  <td>123 Main St, City, State, ZIP</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col lg={4}>
          <div
            style={{ cursor: "pointer" }}
            className="d-flex gap-1 justify-content-end align-items-center"
          >
            <AiOutlineEdit size={20} />
            <h6>Edit</h6>
          </div>
          <div className="text-center font-bold m-3">
            <img
              style={{ width: "30%", height: "50%" }}
              className="rounded-circle mx-auto d-block  "
              src="https://mannatthemes.com/robotech/default/assets/images/users/avatar-11.jpg"
              alt=""
            />
            {user && <h4 className="m-3 text-capitalize">{user.username}</h4>}
            <div className="d-flex gap-2 justify-content-center align-items-center">
              <IoLocation size={20} />
              <p>Los Angeles, California</p>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <div>
                <p className="p-0 m-1">$782</p>
                <p className="p-0 m-0">Total Spent</p>
              </div>
              <div>
                <p className="p-0 m-1">2 week ago</p>
                <p className="p-0 m-0">Last Order</p>
              </div>
              <div>
                <p className="p-0 m-1">57</p>
                <p className="p-0 m-0">Total Orders</p>
              </div>
            </div>

            <div className="d-flex justify-content-center m-3 align-items-center gap-3">
              <IoMdMailUnread size={20} />
              {user && <h5>{user.useremail}</h5>}
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <IoMdCall size={20} />
              {user && <h5>{user.mobilenumber}</h5>}
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default CustomerProfile;
