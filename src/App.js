import React, { useState } from 'react';
import Task from './components/Task/index.js';
import './App.css';

function App() {

  const [ tasks, setTasks ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');

  function createNewTask() {
    if(inputValue !== '') {
      tasks.push(inputValue);
      setTasks([...tasks]);
    }
    return;
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  return (
    <>
      <main>
        <div className='to-do-list-container'>
          <div className='to-do-list-header'>
            <input type='text' className='input-task' placeholder='What Would You Like To Do ?' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className='btn-new-task' onClick={createNewTask}>Add</button>
          </div>
          <ul className='tasks-list'>
            {tasks.map((task, index) => {
              return (
                <Task key={index} task={task} onDelete={() => deleteTask(index)}/>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
