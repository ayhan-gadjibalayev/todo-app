import React from "react";

export default function ModalWindow(props) {
  const { saveChange, taskInput, setTaskInput, onSave } = props;

  return (
    <div className="modalwindow">
      <input
        className="modal-input"
        placeholder="Создать новую задачу"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <textarea placeholder="добавить заметки" className="add-notes"></textarea>
      <button
        className="save-change" 
        onClick={() => {
          if (onSave) {
            onSave(taskInput);
          } else {
            saveChange();
          }
        }}
      >
        Сохранить
      </button>
    </div>
  );
}
