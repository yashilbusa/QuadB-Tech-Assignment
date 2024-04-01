import { createStore } from 'redux';

// Action Types
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

// Action Creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

// Initial State
const initialState = {
  tasks: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer);

export default store;
