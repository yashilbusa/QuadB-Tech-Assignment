import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const App = () => {
  return (
    <div className="app">
      <h1>Simple To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
