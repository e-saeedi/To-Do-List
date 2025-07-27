import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="tasklist-container">
      <p className="header">Tasks</p>
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <span className="task-name">{task.name}</span>
          <span className="task-desc">{task.description}</span>
          <div className="task-actions">
            <button className="confirm-btn">Complete</button>
            <button className="edit-btn" onClick={() => onEdit(index)}>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => {
                onDelete(index);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
