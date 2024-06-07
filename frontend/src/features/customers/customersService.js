import axios from "axios";
const base_url = "http://localhost:3002/api/customers";

export const getAllCustomers = async () => {
  const response = await axios.get(`${base_url}/get-customers-records`);
  return response.data;
};
