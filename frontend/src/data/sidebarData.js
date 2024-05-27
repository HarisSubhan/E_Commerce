import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { LuDollarSign } from "react-icons/lu";

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
