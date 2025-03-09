import React, { useState } from "react";
import ModalWindow from "./CreateNewTaskWindow";

export default function ListButton(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  const { text, letter, addNewList } = props;

  const handleClick = () => {
    const listName = "";
    if (listName) {
      addNewList(listName);
    }
    setTaskInput('')
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <button className="list-bottom" onClick={handleClick}>
        <span className="list-bottom-text">{text}</span>
        <div style={{ display: "flex" }}>
          <span className="letter-l">⌘</span>
          <span className="letter-l">{letter}</span>
        </div>
      </button>
      {isModalOpen && (
        <ModalWindow
          saveChange={() => setIsModalOpen(false)}
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          onSave={(input) => {
            if (input) {
              addNewList(input);
            }
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
}
