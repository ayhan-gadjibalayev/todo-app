import "./App.css";
import "./SidiBarItem.css";
import CreateNewTask from "./components/CreateNewTask";
import MobalProject from "./components/GroupItem";
import ListButton from "./components/ListButton";
import NavigationItem from "./components/NavigationItem";
import HeaderToday from "./components/HeaderToday";
import SidiBarItem from "./components/SidiBarItem";
import React, { useState } from "react";
import ReadBook from "./components/ReadBook";

function App() {
  const [tasks, setTask] = useState([{
    title: "прочитать книгу",
    date: "08.00-09.00",
  },
  {
    title: "Создание каркаса нового продукта",
    date: "09.00-11.00",
  },
  {
    title: "Целевая страница мудборда",
    date: "11.00-13.00",
  },
  {
    title: "Еженедельная встреча",
    date: "13.00-14.00",
  },
  {
    title: "Разработайте PPT для совместного сеанса № 2",
    date: "14.00-16.00",
  },
  {
    title: "смотреть Netflix - Сага о Висланде",
    date: "19.00-20.00",
  }]);

  const saveChange = (newTask) => {
    setTask(prevTasks => [...prevTasks, newTask]);
}

  return (
    <div className="app-container">
      <div className="left-container">
        <span className="private">Частный</span>
        <div className="list">
          <NavigationItem name="дом" icon="house" count="16" />
          <SidiBarItem title="завершенный" count="16" />
          <SidiBarItem title="личный" count="4" />
          <SidiBarItem title="работа" count="6" />
          <NavigationItem name="диета" icon="diet" count="11" />
          <NavigationItem name="книга" icon="book" count="12" />
          <NavigationItem name="машина" icon="car" count="13" />
          <ListButton letter="L" text="+ создать новый список" />

          <h3 style={{ marginLeft: "10px" }}>Группа</h3>

          <div style={{ display: "flex" }}>
            <div className="top-group">
              <div className="left-group"></div>
              <MobalProject people="5" projectname="мобильный" />
            </div>
            <div className="top-group">
              <div className="left-group"></div>
              <MobalProject people="4" projectname="будущий" />
            </div>
          </div>

          <ListButton text="+ создать новую группу" letter="G" />
        </div>
      </div>
      <div className="right-container">
        <HeaderToday username="Салливан" />

        <div className="right-center-container">
          {tasks.map((task) => (
            <ReadBook key={task.id} bookname={task.title} time={task.date} />
          ))}
        </div>
        <CreateNewTask saveChange={saveChange}/>
      </div>
    </div>
  );
}
export default App;