import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

import { PiPencilLight } from "react-icons/pi";
import { MdDelete } from "react-icons/md";

const CustomersRecord = () => {
  const { customers } = useSelector((state) => state.customers);

  return (
    <>
      <Card className="p-2">
        <>
          <table class="table table-striped table-hover ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">customers</th>
                <th scope="col"> Phone</th>
                <th scope="col"> Email</th>
                <th scope="col"> Stock</th>
                <th scope="col"> Last Orders</th>
                <th scope="col"> INVOICE</th>
                <th scope="col"> ACTION</th>
              </tr>
            </thead>
            <tbody>
              {customers?.map((customers, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{customers?.username}</td>
                      <td>{customers?.mobilenumber}</td>
                      <td>{customers?.useremail}</td>
                      <td
                        style={{ cursor: "pointer" }}
                        className="gap-3 d-flex "
                      >
                        <PiPencilLight size={25} />
                        <MdDelete color="#FF3C78" size={25} />
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

export default CustomersRecord;
