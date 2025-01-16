import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDrawerOpen: false, // Initial state of the drawer
};

const NavSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen; // Toggles the drawer state
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false; // Explicitly close the drawer
    },
    openDrawer: (state) => {
      state.isDrawerOpen = true; // Explicitly open the drawer
    },
  },
});

export const { toggleDrawer, closeDrawer, openDrawer } = NavSlice.actions;
export default NavSlice.reducer;
