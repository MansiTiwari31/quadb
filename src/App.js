import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import LeftSidebar from './components/LeftSidebar';

const App = () => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const [isGridView, setIsGridView] = useState(false); 
  const [isSidebarOpen, setSidebarOpen] = useState(true); 

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <LeftSidebar darkMode={darkMode} isSidebarOpen={isSidebarOpen} />
      <div
        className="main-content"
        style={{
          marginLeft: isSidebarOpen ? '250px' : '0',
          transition: 'margin-left 0.3s ease',
        }}
      >
        <Navbar setIsGridView={setIsGridView} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="container" style={{ height: '100vh', padding: '1rem' }}>
          <TaskInput darkMode={darkMode} />
          <TaskList isGridView={isGridView} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default App;
