import { useState } from 'react';
import Navbar from '../src/Navbar/navbar';
import Welcome from './Welcome/Welcome';
import Footer from './footer/footer';
import AddTask from './Add-Task/add-task';
import './Add-Task/modal.css';
function App() {
      const [ShowModal, setShowModal] = useState(false);
  return(
    <>

      <Navbar onAddTaskClick={() => setShowModal(true)} />

      <Welcome onAddTaskClick={() => setShowModal(true)} />

      <Footer />

          {ShowModal && (
        <div className='modal-overlay' onClick={() => setShowModal(false)} >
            <div className='modal-content' onClick={(e) => e.stopPropagation()}> 
                <AddTask closeModal={() => setShowModal(false)} />
            </div>
        </div>

    )}

    </>

  )
}

export default App ;