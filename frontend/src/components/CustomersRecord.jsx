import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  customersReset,
  getCustomersData,
} from "../features/customers/customersSlice";

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
                      <td>{customers?.useremail}</td>
                      <td>{customers?.mobilenumber}</td>
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
