import axios from "axios";

const base_url = "http://localhost:3002/api/admin";

export const postAddProduct = async (productData) => {
  const response = await axios.post(
    `${base_url}/admin-add-product`,
    productData
  );
  return response.data;
};
export const postAddcategory = async (categorydata) => {
  const response = await axios.post(
    `${base_url}/admin-add-category`,
    categorydata
  );
  return response.data;
};

export const getAllCategorys = async () => {
  const response = await axios.get(`${base_url}/get-categorys`);
  return response.data;
};
export const getAllProducts = async () => {
  const response = await axios.get(`${base_url}/get-products`);
  return response.data;
};
