import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { product } = useSelector((state) => state.product);
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
              </tr>
            </thead>
            <tbody>
              {product?.map((product, index) => {
                return (
                  <>
                    <tr>
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
                      <td>{product?.category}</td>
                      <td>{product?.description}</td>
                      <td>{product?.date}</td>
                      <td>{product?.price}</td>
                      <td>{product?.gender}</td>
                      <td>{product?.size}</td>
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
