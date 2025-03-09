import React from "react";

export default function SidiBarItem(props) {
  const { count, title } = props;

  return (
      <div className="private-list">
        <div>
          <span className="list-container">{title}</span>
        </div>
        <span className="number" count={count}></span>
      </div>
  );
}
 