import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <div className="tasklist-container">
      <h2 className="header">Tasks</h2>
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <span className="task-name">{task.name}</span>
          <span className="task-desc">{task.description}</span>
          <div className="task-actions">
            <button className="confirm-btn">Complete</button>
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
