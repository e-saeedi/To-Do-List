import { useEffect, useState } from "react";
import Navbar from "../src/Navbar/navbar";
import Welcome from "./Welcome/Welcome";
import Footer from "./footer/footer";
import AddTask from "./Add-Task/add-task";
import TaskList from "./TaskList/TaskList";
import "./App.css";
import "./Add-Task/modal.css";

function App() {
  const [ShowModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTask = (newTask) => {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
    setShowModal(false);
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToDelete)
    );
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setShowModal(true);
  };
  return (
    <>
      <div className="app-container">
        <Navbar
          onAddTaskClick={() => {
            setShowModal(true);
            setEditIndex(null);
          }}
        />

        <div className="main-content">
          {tasks.length === 0 ? (
            <Welcome
              onAddTaskClick={() => {
                setShowModal(true);
                setEditIndex(null);
              }}
            />
          ) : (
            <TaskList
              tasks={tasks}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />
          )}
        </div>

        <Footer />

        {ShowModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <AddTask
                onSave={handleSaveTask}
                closeModal={() => {
                  setShowModal(false);
                  setEditIndex(null);
                }}
                editIndex={editIndex}
                existingTask={editIndex !== null ? tasks[editIndex] : null}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
