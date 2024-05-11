import axios from "axios";

const base_url = "http://localhost:3002/api/user/";

export const registerUser = async (userData) => {
  const responce = await axios.post(`${base_url}/auth-register`, userData);
  if (responce.data) {
    localStorage.setItem("user", JSON.stringify(responce.data));
  }
  return responce.data;
};
