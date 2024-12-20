import React, { useEffect, useState } from 'react';

const Sidebar = ({ task, darkMode, onClose, onDelete }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Effect to calculate navbar height dynamically
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div
      className={`sidebar position-fixed end-0 ${darkMode ? 'bg-dark text-white' : 'bg-light text-black'}`}
      style={{
        width: '300px',
        top: `${navbarHeight}px`, // Offset for navbar height
        bottom: 0, // Ensure full height coverage
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
        overflowY: 'auto', // Handle overflow for scrolling content
        transition: 'all 0.3s ease', // Smooth sliding transition
      }}
    >
      <div className="p-3">
        {/* Task Info */}
        <div className="task-info d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {}}
              className="me-2"
            />
            <span className="me-2">{task.name}</span>
            <i className={`bi ${task.important ? 'bi-star-fill text-warning' : 'bi-star'}`}></i>
          </div>
        </div>

        {/* Add Step */}
        <div className="mb-3 d-flex align-items-center">
          <i className="bi bi-plus me-2"></i>
          <input
            type="text"
            className={`form-control ${darkMode ? 'bg-dark text-white' : ''}`}
            placeholder="Add step"
          />
        </div>

        {/* Repeat */}
        <div className="mb-3 d-flex align-items-center">
          <i className="bi bi-arrow-repeat me-2"></i>
          <span>Repeat</span>
        </div>

        {/* Due Date */}
        <div className="mb-3 d-flex align-items-center">
          <i className="bi bi-calendar me-2"></i>
          <span>Due Date</span>
        </div>

        {/* Add a Note */}
        <div className="mb-3 d-flex align-items-center" style={{ color: 'gray' }}>
          <i className="bi bi-plus me-2"></i>
          <span>Add a Note</span>
        </div>

        {/* Footer Buttons */}
        <div
          className="position-absolute w-100 d-flex justify-content-between p-3 border"
          style={{ bottom: 0 }}
        >
          <button className="btn" onClick={onClose}>
            <i className={`bi bi-x ${darkMode ? 'text-white' : 'text-dark'}`}></i> {/* Close Icon */}
          </button>
          <button className="btn" onClick={onDelete}>
            <i className={`bi bi-trash ${darkMode ? 'text-white' : 'text-dark'}`}></i> {/* Delete Icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
