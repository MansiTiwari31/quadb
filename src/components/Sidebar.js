import React, { useEffect, useState } from 'react';

const Sidebar = ({ task, darkMode, onClose, onDelete }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

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
        top: `${navbarHeight}px`, 
        bottom: 0,
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
        overflowY: 'auto', 
        transition: 'all 0.3s ease', 
      }}
    >
      <div className="p-3">
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
        <div className="mb-3 d-flex align-items-center">
          <i className="bi bi-plus me-2"></i>
          <input
            type="text"
            className={`form-control ${darkMode ? 'bg-dark text-white' : ''}`}
            placeholder="Add step"
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <i className="bi bi-arrow-repeat me-2"></i>
          <span>Repeat</span>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <i className="bi bi-calendar me-2"></i>
          <span>Due Date</span>
        </div>
        <div className="mb-3 d-flex align-items-center" style={{ color: 'gray' }}>
          <i className="bi bi-plus me-2"></i>
          <span>Add a Note</span>
        </div>
        <div
          className="position-absolute w-100 d-flex justify-content-between p-3 border"
          style={{ bottom: 0 }}
        >
          <button className="btn" onClick={onClose}>
            <i className={`bi bi-x ${darkMode ? 'text-white' : 'text-dark'}`}></i> 
          </button>
          <button className="btn" onClick={onDelete}>
            <i className={`bi bi-trash ${darkMode ? 'text-white' : 'text-dark'}`}></i> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
