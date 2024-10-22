import React, { useState } from "react";
import axios from "axios";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      name: isLogin ? undefined : name,
      role: isLogin ? undefined : role,
    };

    try {
      const res = await axios.post(
        `/api/auth/${isLogin ? "login" : "signup"}`,
        userData
      );
      const { token, user } = res.data;

      // Store user data and token in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("bicuserData", JSON.stringify(user));

      // Reload or redirect after successful login/signup
      window.location.reload();
    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  return (
    <div className="auth-form">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <select onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Need to Sign Up?" : "Already have an account?"}
      </button>
    </div>
  );
};

export default AuthForm;
