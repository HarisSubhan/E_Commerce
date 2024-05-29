import { Button } from "react-bootstrap";
import { FaListUl } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import HeaderUser from "./HeaderUser";

const Header = ({ move, moveSidebar }) => {
  return (
    <>
      <div className="d-flex justify-content-between  align-items-center">
        <div className="gap-4 d-flex">
          <FaListUl
            onClick={moveSidebar}
            style={{ cursor: "pointer" }}
            size={35}
          />
          <Button variant="primary" size="sm">
            New Task
          </Button>
        </div>
        <div className="d-flex gap-4">
          <div className="gap-2 d-flex align-items-center">
            <IoIosSearch size={35} />
            <IoMoonOutline size={35} />
            <CiBellOn size={35} />
          </div>
          <HeaderUser />
        </div>
      </div>

      <hr />
    </>
  );
};

export default Header;
