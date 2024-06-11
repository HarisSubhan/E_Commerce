import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { PiPencilLight } from "react-icons/pi";

const GetCategory = ({ deleteCategory }) => {
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
                <th scope="col">Action</th>
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
                      <td
                        style={{ cursor: "pointer" }}
                        className="gap-3 d-flex "
                      >
                        <PiPencilLight size={25} />
                        <MdDelete
                          onClick={() => deleteCategory(category?._id)}
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

export default GetCategory;
