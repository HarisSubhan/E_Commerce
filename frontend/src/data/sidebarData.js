import { FaLock } from "react-icons/fa6";
import { MdOutlineRestorePage } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { MdOutlineHome } from "react-icons/md";
export const sidebarData = [
  {
    id: 1,
    icon: <MdOutlineHome size={40} color="#94A2B9" />,
    title: "Admin",
  },
  {
    id: 2,
    icon: <CiHome size={40} color="#94A2B9" />,
    title: "Customer",
  },
  {
    id: 2,
    icon: <BsBoxSeam size={35} color="#94A2B9" />,
    title: "Apps",
  },
  {
    id: 4,
    icon: <BsBox size={35} color="#94A2B9" />,
    title: "UI Kit",
  },
  {
    id: 5,
    icon: <MdOutlineRestorePage size={40} color="#94A2B9" />,
    title: "Pages",
  },
  {
    id: 6,
    icon: <FaLock size={40} color="#94A2B9" />,
    title: "Authentication",
  },
];
