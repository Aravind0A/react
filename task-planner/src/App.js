import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TaskList from './TaskList' 

function App() {
  let [task, setTask] = useState([]);
  let [bgColor, setBgColor]  = useState('');
  let [taskName, setTaskName] = useState('');

  let addTask = (e)=>{
    e.preventDefault();
    console.log(task);
    setTask([...task,taskName]);
    setBgColor('lightblue');
    setTaskName('');
  }
  return (
    <div className="App">
      <h1 style={{backgroundColor:bgColor}}>Task List</h1>
      <form onSubmit={addTask}>
        <input type='text' value={taskName} onChange={(e) => setTaskName(e.target.value)}></input>
        <button type='submit'>Add Task</button>
      </form>
      <TaskList listTasks = {task}></TaskList>
    </div>
  );
}

export default App;
