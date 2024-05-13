import { FaLock } from "react-icons/fa6";
import { MdOutlineRestorePage } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { MdOutlineHome } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { LuDollarSign } from "react-icons/lu";

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

export const CardData = [
  {
    id: 7,
    title: <h4>Total Order</h4>,
    order: <h3>14253</h3>,
    data: "8.5 %",
    session: "New Sesion Today",
    icon: <AiOutlineShoppingCart size={100} color="#C3D5FF" />,
  },
  {
    id: 8,
    title: <h4>New Customer</h4>,
    order: <h3>583</h3>,
    data: "0.6%",
    session: "Bounce Rate Weekly",
    icon: <BsPeople size={100} color="#C2EDE0" />,
  },
  {
    id: 7,
    title: <h4>TOP COUPONS</h4>,
    order: <h3>78%</h3>,
    data: "1.5%",
    session: "Weekly Avg.Sessions",
    icon: <IoDiamondOutline size={100} color="#FFE291" />,
  },
  {
    id: 7,
    title: <h4>TOTAL REVENUE</h4>,
    order: <h3>$2865454</h3>,
    data: "10.5%",
    session: "Completions Weekly",
    icon: <LuDollarSign size={100} color="#21515C" />,
  },
];
