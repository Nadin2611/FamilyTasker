import React from 'react';

function Calendar({ tasks }) {
  return (
    <div>
      <h2>Calendar</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.description} - {task.assignee} -{' '}
            {task.repeat ? 'Repeats' : 'One-time'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Calendar;
