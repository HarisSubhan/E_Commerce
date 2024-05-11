import React from "react";
import { Button } from "react-bootstrap";
import { FaListUl } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";

const DashBoard = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-3">
        <div className="gap-4 d-flex">
          <FaListUl size={35} />
          <Button
            style={{ background: "#C3D5FF", color: "#5C3DC3" }}
            className="Task border-0 fw-bolder"
          >
            New Task
          </Button>
        </div>
        <div className="d-flex gap-4">
          <div className="gap-4 d-flex align-items-center">
            <IoIosSearch size={35} />
            <IoMoonOutline size={35} />
            <CiBellOn size={35} />
          </div>
          <div className="d-flex gap-4 align-items-center">
            <img
              width={40}
              height={40}
              className="rounded-circle"
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt=""
            />
            <div className="flex-column align-items-center">
              <p className="p-0 m-0">Maria Gibson</p>
              <p className="p-0 m-0">Admin</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default DashBoard;
