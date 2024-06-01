import React from "react";
import { Card } from "react-bootstrap";
import { CardData } from "../../data/CardData";

const SecondLayer = () => {
  return (
    <>
      <div className="d-flex thirdlayer justify-content-between p-4 ">
        {CardData?.map((item, index) => {
          return (
            <Card className="card p-5">
              <div className="d-flex gap-5 justify-content-between ">
                <div className="first">
                  <p>{item?.title}</p>
                  <p>{item?.order}</p>
                </div>
                <div className="d-flex">{item.icon}</div>
              </div>
              <div className="d-flex gap-3 mt-3 ">
                <p>{item?.data}</p>
                <p>{item?.session}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default SecondLayer;
