import { createSlice } from '@reduxjs/toolkit';

const initialState = [


];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    toggleTaskImportance: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.important = !task.important;
      }
    }
  },
});

export const { addTask, removeTask, toggleTaskCompletion, toggleTaskImportance } = taskSlice.actions;
export default taskSlice.reducer;
