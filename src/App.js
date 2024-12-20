// src/App.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import LeftSidebar from './components/LeftSidebar';

const App = () => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const [isGridView, setIsGridView] = useState(false); // Manage Grid View State
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar toggle state

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Left Sidebar */}
      <LeftSidebar darkMode={darkMode} isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <div
        className="main-content"
        style={{
          marginLeft: isSidebarOpen ? '250px' : '0', // Adjust margin based on sidebar visibility
          transition: 'margin-left 0.3s ease',
        }}
      >
        {/* Navbar */}
        <Navbar setIsGridView={setIsGridView} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Task Input and Task List */}
        <div className="container" style={{ height: '100vh', padding: '1rem' }}>
          <TaskInput darkMode={darkMode} />
          <TaskList isGridView={isGridView} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default App;
