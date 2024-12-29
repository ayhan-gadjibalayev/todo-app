import React from "react";

export default function SidiBarItem(props) {
  const { count, title } = props;

  return (
      <div className="private-list">
        <div className="list-item">
          <input type="checkbox" className="checkbox" />
          <span className="list-container">{title}</span>
        </div>
        <span className="number">{count}</span>
      </div>
  );
}
