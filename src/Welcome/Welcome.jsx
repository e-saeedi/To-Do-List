import React from "react";
import AddTask from "../Add-Task/add-task";
import "./Welcome.css";
import chartimg from "../assets/Image.png";

function Welcome({ onAddTaskClick }) {
  return (
    <>
      <div className={`welcome-container`}>
        <div className="welcome-container">
          <h2 className="welcome-title">Greetings from SimpleTask</h2>
          <p className="welcome-subtitle">
            Manage your tasks effortlessly with our intuitive platform.
          </p>
          <button onClick={onAddTaskClick} className="add-task-btn">
            Add Task
          </button>
          <h3 className="task-overview-title">Task Overview</h3>
          <img src={chartimg} alt="task chart" className="chart-img" />
        </div>
      </div>
    </>
  );
}

export default Welcome;
