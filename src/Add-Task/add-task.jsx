import React from "react";
import { useState } from "react";
import "./add-task.css";

const AddTask = ({ closeModal, tasks, setTasks, onSave }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !description || !dueDate) return;
    const newTask = {
      name: taskName,
      description: description,
      date: dueDate,
      status: "Pending",
    };
    onSave(newTask);
    setTasks([...tasks, newTask]);
    closeModal();
  };

  return (
    <div className="add-task-box">
      <h2> add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Task Name </label>
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <label> Description </label>
        <textarea
          placeholder="Ennter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <div className="button-group">
          <button type="button" onClick={closeModal} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
