import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './logo.png';
import { toggleMode } from '../features/modeSlice';

const Navbar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.mode.darkMode);

  const handleToggleMode = () => {
    dispatch(toggleMode());
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand">
          <img src={logo} alt="Logo" height="30" />
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-link nav-link">
                <i className={`bi bi-search ${darkMode ? 'text-white' : ''}`}></i>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link">
                <i className={`bi bi-grid ${darkMode ? 'text-white' : ''}`}></i>
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-link nav-link"
                onClick={handleToggleMode}
              >
                {darkMode ? (
                  <i className="bi bi-moon text-white"></i>
                ) : (
                  <i className="bi bi-sun"></i>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
