import React from "react";
import { FaHouse } from "react-icons/fa6";
import { LuBicepsFlexed } from "react-icons/lu";
import { FaCarSide } from "react-icons/fa6";
import { SiBookstack } from "react-icons/si";

const Sidebar = [
  {
    name: "дом",
    icon: <FaHouse />,
    count: "16",
    id: 1,
  },
  {
    name: "диета",
    icon: <LuBicepsFlexed />,
    count: "11",
    id: 2,
  },
  {
    name: "книга",
    icon: <SiBookstack />,
    count: "12",
    id: 3,
  },
  {
    name: "машина",
    icon: <FaCarSide />,
    count: "13",
    id: 4,
  },
];

export default function NavigationItem() {
  return (
    <div className="private-list">
      {Sidebar.map(item => (
        <div className="list-item" key={item.id}>
          {item.icon}
          <span className="list-container">{item.name}</span>
          <span className="number">{item.count}</span>
        </div>
      ))}
    </div>
  );
}
