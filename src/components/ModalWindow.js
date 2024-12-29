import React from "react";

export default function ModalWindow(props) {
    const { saveChange, taskInput, setTaskInput } = props;

    return (
        <div className="modalwindow">
            <input 
                className="modal-input" 
                placeholder="Create new task" 
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <textarea placeholder="add notes" className="add-notes"></textarea>
            <button className="save-change" onClick={saveChange}>Save change</button>
        </div>
    )
}