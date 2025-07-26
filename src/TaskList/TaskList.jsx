import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <div className="tasklist-container">
      <h2> your Tasks</h2>
      {tasks.map((task, index) => (
        <div className="task-card" key={index}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>
            <strong>Due:</strong> {task.date}
          </p>
          <p>
            <strong>Status:</strong>
            {task.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
