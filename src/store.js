import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './features/modeSlice';
import taskReducer from './features/TaskSlice';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    tasks: taskReducer,
  },
});
