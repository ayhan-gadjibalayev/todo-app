import React from "react";

export default function HeaderToday (props) {
    const {username} = props;

    return (
        <div className="header-container">
        <div className="right-header-block">
          <span style={{ fontSize: "30px" }}>
            <b>Доброе утро, {username}! 👋</b>
          </span>
          <span style={{ fontSize: "25px", color: "grey" }}>Сегодня среда, 26 июля 2023 г.</span>
        </div>
        <div className="left-header-block">
          <div className="strelka-block">
            <span className="down-arrow">⮟</span>
            <span style={{ font: "20px", marginLeft: "10px" }}>Сегодня</span>
          </div>
          <span className="equals">=</span>
        </div>
      </div>
    )
}