// src/features/sidebarSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state for sidebar
const initialState = {
  isSidebarOpen: true,  // Sidebar is open by default
};

// Create a slice for managing sidebar state
const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    // Toggle the sidebar open/close
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

// Export the action to toggle sidebar
export const { toggleSidebar } = sidebarSlice.actions;

// Export the reducer to use in the store
export default sidebarSlice.reducer;
