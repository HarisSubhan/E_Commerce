import axios from "axios";

const base_url = "http://localhost:3002/api/admin";

export const adminAddProduct = async (productData) => {
  const responce = await axios.post(
    `${base_url}/admin-add-product`,
    productData
  );
  return responce.data;
};
