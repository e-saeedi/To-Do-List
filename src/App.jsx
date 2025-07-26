import { useState } from "react";
import Navbar from "../src/Navbar/navbar";
import Welcome from "./Welcome/Welcome";
import Footer from "./footer/footer";
import AddTask from "./Add-Task/add-task";
import TaskList from "./TaskList/TaskList";
import "./Add-Task/modal.css";

function App() {
  const [ShowModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleSaveTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowModal(false);
  };

  return (
    <>
      <div className="app-container">
        <Navbar onAddTaskClick={() => setShowModal(true)} />

        <div className="main-content">
          {tasks.length === 0 ? (
            <Welcome onAddTaskClick={() => setShowModal(true)} />
          ) : (
            <TaskList tasks={tasks} />
          )}
        </div>

        <Footer />

        {ShowModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <AddTask
                onSave={handleSaveTask}
                closeModal={() => setShowModal(false)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
