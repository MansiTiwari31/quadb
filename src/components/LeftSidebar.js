import React from 'react';
import { FaPlus, FaChartBar, FaTasks, FaStar, FaCalendar, FaUserAlt } from 'react-icons/fa'; 

const LeftSidebar = ({ darkMode, isSidebarOpen }) => {
  return (
    <div
      className={`left-sidebar ${darkMode ? 'bg-dark text-white' : 'bg-light text-black'}`}
      style={{
        width: isSidebarOpen ? '250px' : '50px', 
        overflow: 'hidden',
        transition: 'width 0.3s ease',
        height: '100vh',
        position: 'fixed',
        top: '50px', 
        left: 0,
        zIndex: 1000,
      }}
    >
      <div className="p-3">
       
        <div className="text-center mb-4">
          <img
            src="https://via.placeholder.com/60" 
            alt="User"
            className="rounded-circle"
            style={{ width: '60px', height: '60px' }}
          />
          <h5 className="mt-2">John Doe</h5>
        </div>
        <div className="mb-4">
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-2">
              <FaCalendar className="me-2" />
              <span>Today</span>
            </li>
            <li className="d-flex align-items-center mb-2">
              <FaTasks className="me-2" />
              <span>All Tasks</span>
            </li>
            <li className="d-flex align-items-center mb-2">
              <FaStar className="me-2" />
              <span>Important</span>
            </li>
            <li className="d-flex align-items-center mb-2">
              <FaCalendar className="me-2" />
              <span>Planned</span>
            </li>
            <li className="d-flex align-items-center mb-4">
              <FaUserAlt className="me-2" />
              <span>Assigned to Me</span>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <button className="btn btn-link w-100 d-flex align-items-center">
            <FaPlus className="me-2" />
            <span>Add List</span>
          </button>
        </div>
        <div className="chart-section">
          <h6>Today Task</h6>
          <div
            style={{
              height: '100px',
              backgroundColor: '#e0e0e0',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#333',
            }}
          >
            <FaChartBar />
            <span className="ms-2">50%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
