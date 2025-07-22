import React from 'react';
import './add-task.css' ;

const addTask = ({ closeModal}) => {
    return(
    <div className='add-task-box'>
        <h2> add New Task</h2>
        <form>
            <label>Task Name </label>
            <input type='text' placeholder='Enter task name' /> 

            <label> Description </label>
            <textarea placeholder='Ennter task description' />

            <label>Due Date</label>
            <input type='date' />

            <div className='button-group' >
                <button onClick={closeModal} className='cancel-btn'>Cancel</button>
                <button type='submit' className='save-btn'>Save</button>
            </div>
        </form>
    </div>
    )
}

export default addTask ;