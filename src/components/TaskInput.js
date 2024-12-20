import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/TaskSlice';

const TaskInput = ({ darkMode }) => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch(addTask({ id: Date.now(), name: taskName, completed: false, important: false }));
      setTaskName('');
    }
  };

  return (
    <div className={`task-input border p-3 my-3 ${darkMode ? 'bg-dark text-white' : ''}`}>
      {/* Input field */}
      <div className="mb-2">
        <input
          type="text"
          className={`form-control border-0 ${darkMode ? 'bg-dark text-white' : ''}`} // Input background and text color
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add a task"
          style={{
            color: darkMode ? 'white' : 'black', // Text color
            backgroundColor: darkMode ? '#333' : 'white', // Background color
          }}
        />
      </div>

      {/* Icons and Add Task Button */}
      <div className="d-flex justify-content-between align-items-center">
        {/* Left Side: Icons */}
        <div className="d-flex">
          <i className="bi bi-bell me-3"></i> {/* Bell Icon */}
          <i className="bi bi-arrow-repeat me-3"></i> {/* Repeat Icon */}
          <i className="bi bi-calendar me-3"></i> {/* Calendar Icon */}
        </div>

        {/* Right Side: Add Task Button */}
        <button onClick={handleAddTask} className="btn btn-primary">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
