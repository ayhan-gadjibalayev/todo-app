import "./App.css";
import "./SidiBarItem.css";
import CreateNewTask from "./components/CreateNewTask";
import MobalProject from "./components/GroupItem";
import ListButton from "./components/CreateNewListWindow";
import NavigationItem from "./components/NavigationItem";
import HeaderToday from "./components/HeaderToday";
import SidiBarItem from "./components/SidiBarItem";
import React, { useState } from "react";
import ReadBook from "./components/ReadBook";
import { SiBookstack } from "react-icons/si";
import { LuBicepsFlexed } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";

export default function App() {
  const [active, setActive] = useState();
  const [taskList, setTaskList] = useState([
    {
      name: "дом",
      icon: <FaHouse />,
    
      id: 1,
      tasks: [
        {
          title: "прочитать книгу",
          date: "08.00-09.00",
          isChecked: false,
          id: 1,
          parentId: 1,
        },
        {
          title: "Создание каркаса нового продукта",
          date: "09.00-11.00",
          isChecked: false,
          id: 2,
          parentId: 1,
        },
        {
          title: "Целевая страница мудборда",
          date: "11.00-13.00",
          isChecked: false,
          id: 3,
          parentId: 1,
        },
      ],
    },
    {
      name: "диета",
      icon: <LuBicepsFlexed />,
      id: 2,
      tasks: [
        {
          title: "Еженедельная встреча",
          date: "13.00-14.00",
          isChecked: false,
          id: 4,
          parentId: 2,
        },
      ],
    },
    {
      name: "книга",
      icon: <SiBookstack />,
      id: 3,
      tasks: [
        {
          title: "Разработайте PPT для совместного сеанса № 2",
          date: "14.00-16.00",
          isChecked: false,
          id: 5,
          parentId: 3,
        },
        {
          title: "смотреть Netflix - Сага о Висланде",
          date: "19.00-20.00",
          isChecked: false,
          id: 6,
          parentId: 3,
        },
      ],
    },
    {
      name: "машина",
      icon: <FaCarSide />,
      id: 4,
      tasks: [],
    },
  ]);

  const saveChange = (newTask, parentId) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === parentId
          ? {
              ...task,
              tasks: [...task.tasks, newTask],
            }
          : task
      )
    );
  };

  const onChange = (updatedTask) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === updatedTask.parentId) {
          return {
            ...task,
            tasks: task.tasks.map((task) =>
              task.id === updatedTask.id ? updatedTask : task
            ),
          };
        } else {
          return task;
        }
      })
    );
  };

  const addNewList = (listName) => {
    const newList = {
      name: listName,
      icon: <FaHouse />,
      id: Date.now(),
      tasks: [],
    };
    setTaskList((prevTasks) => [...prevTasks, newList]);
  };

  const getTasks = () => {
    const activeTask = taskList.find((task) => task.id === active);
    return activeTask ? activeTask.tasks : [];
  };

const deleteTask = () => {
    setTaskList((prevTasks) => {
        return prevTasks.map((taskList) => {
            const newTasks = taskList.tasks.filter((task) => task.isChecked === false);
            return {
                ...taskList,
                tasks: newTasks,
            };
        });
    });
};


  return (
    <div className="app-container">
      <div className="left-container">
        <span className="private">Частный</span>
        <div className="list">
          <NavigationItem
            taskList={taskList}
            active={active}
            setActive={setActive}
          />
          <ListButton
            letter="L"
            text="+ создать новый список"
            addNewList={addNewList}
          />

          <SidiBarItem />

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

          <ListButton
            text="+ создать новую группу"
            letter="G"
            addNewList={addNewList}
          />
        </div>
      </div>
      <div className="right-container">
        <HeaderToday
          username="Салливан"
          buttondelete={deleteTask}
          taskId={active}
        />

        <div className="right-center-container">
          {getTasks().map((task) => (
            <ReadBook
              key={task.id}
              task={task}
              onChange={onChange}
              isActive={active === task.parentId}
            />
          ))}
        </div>
        <CreateNewTask saveChange={saveChange} active={active} />
      </div>
    </div>
  );
}
