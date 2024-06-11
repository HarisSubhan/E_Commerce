import React from "react";
import { Card } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { PiPencilLight } from "react-icons/pi";

const OdersTable = () => {
  return (
    <>
      <Card>
        <table class="table table-striped table-hover ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ORDER ID </th>
              <th scope="col">Payment </th>
              <th scope="col">Date</th>
              <th scope="col">Invoice</th>
              <th scope="col">STATUS</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ cursor: "pointer" }} className="gap-3 d-flex ">
                <PiPencilLight size={25} />
                <MdDelete color="#FF3C78" size={25} />
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default OdersTable;
