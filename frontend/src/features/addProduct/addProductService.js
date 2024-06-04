import axios from "axios";

const base_url = "http://localhost:3002/api/admin";

export const postAddProduct = async (productData) => {
  const response = await axios.post(
    `${base_url}/admin-add-product`,
    productData
  );
  return response.data;
};
