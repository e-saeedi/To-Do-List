import React from 'react';
import './navbar.css' ;



 
function navbar( {onAddTaskClick} ) {
    return (
        <nav className='navbar'>
            <div className='navbar-title'>To Do List </div>
            <div>
                <button className='navbar-button'>Home</button>
                <button onClick={onAddTaskClick} className='navbar-button'>add Task</button>
                <button className='navbar-button'>Task List</button>
                <button className='navbar-button'>Settings</button>
            </div>
        </nav>
    );
}


export default navbar;
