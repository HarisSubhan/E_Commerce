import axios from "axios";

const base_url = "http://localhost:3002/api/admin";

export const postAddProduct = async (productData) => {
  const response = await axios.post(
    `${base_url}/admin-add-product`,
    productData
  );
  return response.data;
};

export const getAllProducts = async () => {
  const response = await axios.get(`${base_url}/get-products`);
  return response.data;
};
export const getSingleProduct = async (_id) => {
  const response = await axios.get(`${base_url}/get-products/${_id}`);
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

export const deleteCategoryById = async (id) => {
  const response = await axios.delete(
    `http://localhost:3002/api/admin/delete-category/${id}`
  );
  return response.data;
};

export const deleteProductById = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3002/api/admin/delete-product/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
