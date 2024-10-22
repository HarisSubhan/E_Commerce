import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BiCheckbox } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { regUser, loginUser, reset } from "../features/auth/authSlice";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, message, isSuccess, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Operation successful");
      navigate("/");
    }
    dispatch(reset());
  }, [isSuccess]);

  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
    mobilenumber: "",
    role: "customer",
  });

  const { username, email, password, mobilenumber, role } = formFields;

  const handleChange = (e) => {
    setFormFields((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username: isLogin ? undefined : username,
      email,
      password,
      mobilenumber: isLogin ? undefined : mobilenumber,
      role: isLogin ? undefined : role,
    };

    if (isLogin) {
      dispatch(loginUser(userData)); // Call login action
    } else {
      dispatch(regUser(userData)); // Call registration action
    }
  };

  return (
    <div className="auth-form">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <Form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                value={username}
                onChange={handleChange}
                name="username"
                placeholder="Username"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                value={mobilenumber}
                onChange={handleChange}
                name="mobilenumber"
                placeholder="Mobile Number"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Select onChange={handleChange} name="role" value={role}>
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>
          </>
        )}

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button type="submit">{isLogin ? "Login" : "Sign Up"}</Button>
      </Form>

      <div className="checkbox mt-3 p-2">
        <p>
          <BiCheckbox size={40} /> By registering you agree to the Terms of Use
        </p>
      </div>

      <Button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Need to Sign Up?" : "Already have an account?"}
      </Button>
    </div>
  );
};

export default AuthForm;
