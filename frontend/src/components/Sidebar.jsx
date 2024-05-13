import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Card } from "react-bootstrap";
import { sidebarData } from "../data/sidebarData";

const Sidebar = ({ move, moveSidebar }) => {
  return (
    <>
      <div
        style={{ background: "#5C3DC3", height: "100vh" }}
        ref={move}
        className="sidebar p-4  "
      >
        <div className="mt-3  justify-content-center d-flex d-block mx-auto">
          <img
            width={40}
            alt=""
            src="https://mannatthemes.com/robotech/default/assets/images/logo-sm.png"
          />
          <img
            width={140}
            alt=""
            src="https://mannatthemes.com/robotech/default/assets/images/logo.png"
          />
        </div>
        <hr />
        <Card className="border-0" style={{ background: "#5C3DC3" }}>
          <p>DASHBOARDS & APPS</p>
          {sidebarData?.map((item, index) => {
            return (
              <>
                <div className="home align-items-center justify-content-between d-flex p-2">
                  <div className="icon d-flex gap-2 align-items-center">
                    {item?.icon}
                    <h4 className="mt-2 text-white">{item?.title}</h4>
                  </div>
                  <IoIosArrowUp />
                </div>
              </>
            );
          })}
        </Card>
      </div>
    </>
  );
};

export default Sidebar;
