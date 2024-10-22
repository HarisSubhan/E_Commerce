import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { BiCheckbox } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logUser, reset } from "../features/auth/authSlice";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignupUser = ({ SetShowForm2 }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, message, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message); // Show error message
    }
    if (isSuccess) {
      navigate("/"); // Navigate on successful login
    }
    dispatch(reset()); // Reset any previous states
  }, [dispatch, isError, isSuccess, message, navigate]);

  const [formFields, setFormFields] = useState({
    useremail: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormFields((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  const { useremail, password } = formFields;

  const validatePassword = (password) => {
    // Example: Password must be at least 6 characters long
    return password.length >= 6;
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Validate password before dispatching
    if (!validatePassword(password)) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    const data = {
      useremail,
      password,
    };
    dispatch(logUser(data)); // Dispatch the login action
  };

  return (
    <>
      <div className="">
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
            Login to continue to Admin Panel.
          </h5>
        </Card>
        <Card className="col-xl-4 col-lg-6 mx-auto p-2 ">
          <div className="reg p-3">
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
              Login
            </Button>
            <div className="log d-flex justify-content-center mt-3">
              <p>Already have an account ?</p>
              <Link to="/register-user">Register</Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SignupUser;
