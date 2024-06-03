import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { BiCheckbox } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { regUser, reset } from "../features/auth/authSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Registeruser = ({ SetShowForm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, message, isSuccess, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/homePage");
    }
    dispatch(reset());
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account Register");
    }
    dispatch(reset());
  }, [isSuccess]);

  const [formFields, setFormFields] = useState({
    username: "",
    useremail: "",
    password: "",
    mobilenumber: "",
  });

  const handleChange = (e) => {
    setFormFields((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };
  const { username, useremail, password, mobilenumber } = formFields;

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      username,
      useremail,
      password,
      mobilenumber,
    };
    dispatch(regUser(data));
  };

  return (
    <>
      <div className="register ">
        <Card
          style={{ background: "#0F172A" }}
          className="col-xl-4 text-center col-lg-6 d-block mx-auto p-5"
        >
          <img
            width={100}
            src="https://mannatthemes.com/robotech/default/assets/images/logo-sm.png"
            alt=""
          />
          <h3 className="text-white">Let's Get Started</h3>
          <h5 style={{ color: "#94A3B8" }} className="">
            Sign Up to continue to Admin Panel.
          </h5>
        </Card>
        <Card className="col-xl-4 col-lg-6 mx-auto p-2 ">
          <div className="reg p-3">
            <label style={{ color: "#475569" }} className="mt-3 fw-bolder">
              Username
            </label>
            <Form.Control
              value={username}
              onChange={handleChange}
              name="username"
              placeholder="Username"
              className="mt-3  p-3"
            />
            <label
              style={{ color: "#475569" }}
              className="mt-3 fw-bolder"
              htmlFor=""
            >
              UserEmail
            </label>
            <Form.Control
              value={useremail}
              onChange={handleChange}
              name="useremail"
              placeholder="User Email"
              className="mt-3 p-3"
            />
            <label
              style={{ color: "#475569" }}
              className="mt-3 fw-bolder"
              htmlFor=""
            >
              Password
            </label>
            <Form.Control
              value={password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              className="mt-3 p-3"
            />
            <label
              style={{ color: "#475569" }}
              className="mt-3 fw-bolder"
              htmlFor=""
            >
              Mobile Number
            </label>
            <Form.Control
              value={mobilenumber}
              onChange={handleChange}
              name="mobilenumber"
              placeholder="Mobile Number"
              className="mt-3 p-3"
            />
            <div className="checkbox mt-3 p-2 fs-5 d-flex gap-4 ">
              <p className="">
                <BiCheckbox size={40} />
                By registering you agree to the Robotech Terms of Use
              </p>
            </div>

            <Button
              onClick={handleClick}
              style={{ background: "#5C3DC3" }}
              className="w-100  fs-3"
            >
              Register
            </Button>
            <div className="log d-flex justify-content-center mt-3">
              <p>Already have an account ?</p>
              <Link to="/login">Log In</Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Registeruser;
