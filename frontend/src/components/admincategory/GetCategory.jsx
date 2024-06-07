import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const GetCategory = () => {
  const { category } = useSelector((state) => state.product);
  return (
    <>
      <Card className="p-2">
        <>
          <table class="table table-striped table-hover ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Category Name</th>
                <th scope="col">Category Description</th>
              </tr>
            </thead>
            <tbody>
              {category?.map((category, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{category?.categoryname}</td>
                      <td>{category?.categorydescription}</td>
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

export default GetCategory;
