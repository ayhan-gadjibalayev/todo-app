import React from "react";
import { FaHouse } from "react-icons/fa6";
import { LuBicepsFlexed } from "react-icons/lu";
import { FaCarSide } from "react-icons/fa6";
import { SiBookstack } from "react-icons/si";

export default function NavigationItem(props) {
  const { icon, name, count } = props;

  const renderView = () => {
    switch (icon) {
      case 'house':
        return <FaHouse />;
      case 'diet':
        return <LuBicepsFlexed/>
      case 'book':
        return <SiBookstack/>;
      case "car":
        return <FaCarSide/>;
      default:
    }
  };

  const newIcon = renderView();

  return (
      <div className="private-list">
        <div className="list-item">
          {newIcon}
          <span className="list-container">{name}</span>
        </div>
        <span className="number">{count}</span>
      </div>
  );
}
