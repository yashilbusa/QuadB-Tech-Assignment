import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './store';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: taskText }));
      setTaskText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task..."
        value={taskText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
