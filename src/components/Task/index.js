import React, { useState } from 'react';
import './style.css';

const Task = ({ task, onDelete }) => {

    const [ isCompleted, setIsCompleted ] = useState(false);

    return (
        <>
            <li className='task'>
                <p style={{textDecoration: isCompleted && 'line-through'}}>{task}</p>
                <div className='task-menu'>
                    <input type='checkbox' className='check-task' onClick={() => setIsCompleted(!isCompleted)}/>
                    <button className='btn-delete-task' onClick={onDelete}>&#215;</button>
                </div>
            </li>
        </>
    );
}

export default Task;