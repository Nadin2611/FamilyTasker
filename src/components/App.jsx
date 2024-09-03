import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Calendar from './Calendar';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>Family Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <Calendar tasks={tasks} />
      <Statistics tasks={tasks} />
    </div>
  );
}

export default App;
