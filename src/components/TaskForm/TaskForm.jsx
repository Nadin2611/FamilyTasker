import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    description: '',
    assignee: '',
    repeat: false,
  });

  const handleSubmit = e => {
    e.preventDefault();
    addTask({ ...task, id: Date.now(), completed: false });
    setTask({ description: '', assignee: '', repeat: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Description"
        value={task.description}
        onChange={e => setTask({ ...task, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Assignee"
        value={task.assignee}
        onChange={e => setTask({ ...task, assignee: e.target.value })}
      />
      <label>
        Repeat:
        <input
          type="checkbox"
          checked={task.repeat}
          onChange={e => setTask({ ...task, repeat: e.target.checked })}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
