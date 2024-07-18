import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { PiPencilLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getCategorysData,
  getProductData,
} from "../../features/addProduct/addProductSlice";

const ProductDetail = () => {
  const { product, category } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategorysData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductData());
    // dispatch(productReset());
  }, [dispatch]);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <>
      <Card className="p-2">
        <>
          <table class="table table-striped table-hover ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Image</th>
                <th scope="col">Product Title</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Description</th>
                <th scope="col">Product Date</th>
                <th scope="col">Product Price</th>
                <th scope="col">Product Gender</th>
                <th scope="col">Product Size</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {product?.map((product, index) => {
                const ProductCategory = category.find(
                  (category) => category._id === product.category
                );
                return (
                  <>
                    <tr key={product._id}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <img
                          width={30}
                          height={30}
                          src={product?.image}
                          alt=""
                        />
                      </td>
                      <td>{product?.title}</td>
                      <td>{ProductCategory?.categoryname}</td>
                      <td>{product?.description}</td>
                      <td>{product?.date}</td>
                      <td>{product?.price}</td>
                      <td>{product?.gender}</td>
                      <td>{product?.size}</td>
                      <td
                        style={{ cursor: "pointer" }}
                        className="gap-3 d-flex "
                      >
                        <PiPencilLight size={25} />
                        <MdDelete
                          onClick={() => handleDeleteProduct(product?._id)}
                          color="#FF3C78"
                          size={25}
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </>
      </Card>
    </>
  );
};

export default ProductDetail;
