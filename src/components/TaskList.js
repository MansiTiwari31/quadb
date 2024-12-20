import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskCompletion, toggleTaskImportance, removeTask } from '../features/TaskSlice';
import Sidebar from './Sidebar';

const TaskList = ({ darkMode, isGridView  }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [selectedTask, setSelectedTask] = useState(null);

  const completedTasks = tasks.filter((task) => task.completed);
  const notCompletedTasks = tasks.filter((task) => !task.completed);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleCloseSidebar = () => {
    setSelectedTask(null);
  };

  return (
    <div className="task-list">
      <div className={`row ${isGridView ? 'g-4' : ''}`}>
        {notCompletedTasks.map((task) => (
          <div
            key={task.id}
            className={`task-row mb-2 ${isGridView ? 'col-12 col-sm-6 col-md-4' : 'col-12'} d-flex justify-content-between align-items-center p-3 ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}
            style={{ cursor: 'pointer' }}
            onClick={() => handleTaskClick(task)}
          >
            <div className={`d-flex align-items-center w-100 ${darkMode ? 'bg-dark text-white' : ''}`}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(e) => {
                  e.stopPropagation();
                  dispatch(toggleTaskCompletion(task.id));
                }}
                className="me-2"
              />
              <span className={`task-name ${darkMode ? 'text-white' : ''}`}>{task.name}</span>
            </div>
            <button
              className="btn btn-link"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(toggleTaskImportance(task.id));
              }}
            >
              <i className={`bi ${task.important ? 'bi-star-fill text-warning' : 'bi-star'} ${darkMode ? 'text-white' : ''}`}></i>
            </button>
          </div>
        ))}
      </div>

      {completedTasks.length > 0 && <h5 className="mt-4">Completed</h5>}

      {completedTasks.map((task) => (
        <div
          key={task.id}
          className={`task-row mb-2 p-2 d-flex justify-content-between align-items-center ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}
          style={{ cursor: 'pointer' }}
          onClick={() => handleTaskClick(task)}
        >
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => {
                e.stopPropagation();
                dispatch(toggleTaskCompletion(task.id));
              }}
              className="me-2"
            />
            <span className={`${darkMode ? 'text-white' : ''}`}>{task.name}</span>
          </div>
          <button
            className="btn btn-link"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleTaskImportance(task.id));
            }}
          >
            <i
              className={`bi ${task.important ? 'bi-star-fill text-warning' : 'bi-star'} ${darkMode ? 'text-white' : ''}`}
            ></i>
          </button>
        </div>
      ))}
      {selectedTask && (
        <Sidebar
          task={selectedTask}
          darkMode={darkMode}
          onClose={handleCloseSidebar}
          onDelete={() => {
            dispatch(removeTask(selectedTask.id));
            handleCloseSidebar();
          }}
        />
      )}
    </div>
  );
};

export default TaskList;
