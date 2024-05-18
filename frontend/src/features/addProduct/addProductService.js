import axios from "axios";

const base_url = "http://localhost:3002/api/user";

export const adminAddProduct = async (productData) => {
  const responce = await axios.post(
    `${base_url}/admin-add-product`,
    productData
  );
  if (responce.data) {
    localStorage.setItem("user", JSON.stringify(responce.data));
  }
  return responce.data;
};
