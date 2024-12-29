import React, { useState } from "react";
import ModalWindow from "./ModalWindow";

export default function CreateNewTask(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const { saveChange } = props;

    const createTask = () => {
        setIsOpen(prevState => !prevState);
    }

    const currentDateTime = new Date().toLocaleString();

    const handleSaveChange = () => {
        if (taskInput.trim()) {
            saveChange({
                title: taskInput,
                date: currentDateTime,
            });
            setTaskInput('');
            setIsOpen(false);
        }
    }    

    return (
        <div className="task-block">
            {isOpen && (
                <ModalWindow 
                    isOpen={isOpen} 
                    saveChange={handleSaveChange} 
                    taskInput={taskInput} 
                    setTaskInput={setTaskInput}
                />
            )}
            <button onClick={createTask} className="new-task">
                <span>+ Создать новую задачу</span>
                <div style={{ display: "flex" }}>
                    <span className="letter-letter">⌘</span>
                    <span className="letter-letter">N</span>
                </div>
            </button>
        </div>
    )
}