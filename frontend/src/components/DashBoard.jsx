import { Button } from "react-bootstrap";
import { FaListUl } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { FaPowerOff } from "react-icons/fa6";
import { useState } from "react";

const DashBoard = () => {
  const [dropdownMenu, setdropdownMenu] = useState(false);
  const click = () => setdropdownMenu(!dropdownMenu);

  return (
    <>
      <div className="mt-4 px-4">
        <div className="d-flex justify-content-between  align-items-center">
          <div className="gap-4 d-flex">
            <FaListUl style={{ cursor: "pointer" }} size={35} />
            <Button variant="primary" size="sm">
              New Task
            </Button>
          </div>
          <div className="d-flex gap-4">
            <div className="gap-4 d-flex align-items-center">
              <IoIosSearch size={35} />
              <IoMoonOutline size={35} />
              <CiBellOn size={35} />
            </div>
            <div
              onClick={click}
              style={{ cursor: "pointer" }}
              className="d-flex gap-2 align-items-center"
            >
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
              {dropdownMenu && (
                <div className="  position-absolute  ">
                  <ul
                    style={{ color: "MenuText" }}
                    className="bg-white  dropdownmenu  fs-4 position-relative  border"
                  >
                    <li className="gap-2 d-flex align-items-center">
                      <IoPersonOutline />
                      Profile
                    </li>
                    <li className="gap-2 d-flex align-items-center">
                      <IoSettingsOutline />
                      Setting
                    </li>
                    <li className="gap-2 d-flex align-items-center">
                      <FiDollarSign />
                      Earning
                    </li>
                    <li className="gap-2 d-flex align-items-center">
                      <FaPowerOff />
                      Sign Out
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default DashBoard;
