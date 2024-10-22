import axios from "axios";

const base_url = "http://localhost:3002/api/user/";

export const registerUser = async (userData) => {
  const responce = await axios.post(`${base_url}/auth-register`, userData);
  if (responce.data) {
    localStorage.setItem("user", JSON.stringify(responce.data));
  }
  return responce.data;
};

export const loginUser = async (userData) => {
  const responce = await axios.post(`${base_url}/auth-login`, userData);
  if (responce.data) {
    localStorage.setItem("user", JSON.stringify(responce.data));
  }
  return responce.data;
};

export const logout = async (userData) => {
  const responce = await axios.get(`${base_url}/auth-logout`, userData);
  if (responce.data) {
    localStorage.setItem("user", JSON.stringify(responce.data));
  }
  return responce.data;
};
