import React from "react";
import { IoTrashBin } from "react-icons/io5";

export default function HeaderToday(props) {
  const { username, buttondelete } = props;

  const today = new Date();

  const formattedDate = today
    .toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/\./g, "")
    .trim();

  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  const dayIndex = today.getDay();

  const currentDay = daysOfWeek[dayIndex];

  return (
    <div className="header-container">
      <div className="right-header-block">
        <span style={{ fontSize: "30px" }}>
          <b>Доброе утро, {username}! 👋</b>
        </span>
        <span style={{ fontSize: "25px", color: "grey" }}>
          Сегодня {currentDay}, {formattedDate}</span>
      </div>
      <div className="left-header-block">
        <div className="strelka-block">
          <span className="down-arrow">⮟</span>
          <span style={{ fontSize: "20px", marginLeft: "10px" }}>Сегодня</span>
        </div>
        <IoTrashBin className="equals" onClick={buttondelete} />
      </div>
    </div>
  );
}
