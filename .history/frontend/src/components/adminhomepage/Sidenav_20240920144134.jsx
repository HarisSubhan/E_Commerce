import React from "react";
import { Sidebar } from "../../data/Sidebar";
import { NavLink } from "react-router-dom";

const Sidenav = ({ Children }) => {
  return (
    <>
      <div className="con">
        <div
          style={{
            backgroundColor: "#5E3DC3",
            height: "100vh",
          }}
          className="sidebar p-4"
        >
          <div
            style={{
              backgroundColor: "#5E3DC3",
            }}
            className=" gap-3 p-4  d-flex"
          >
            <img
              width={50}
              height={50}
              src="https://mannatthemes.com/robotech/default/assets/images/logo-sm.png"
              alt=""
            />
            <img
              width={150}
              height={50}
              src="https://mannatthemes.com/robotech/default/assets/images/logo.png"
              alt=""
            />
          </div>
          {Sidebar.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              clasName="link "
              activeClassName="active"
            >
              <div className="d-flex  align-items-center gap-2 text-white fs-4 mt-3">
                <div className="icon  ">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </div>
            </NavLink>
          ))}
        </div>
        <main>{Children}</main>
      </div>
    </>
  );
};

export default Sidenav;
