import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './store';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
