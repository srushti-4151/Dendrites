import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDrawerOpen: false, 
};

const NavSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen; 
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false; 
    },
    openDrawer: (state) => {
      state.isDrawerOpen = true;
    },
  },
});

export const { toggleDrawer, closeDrawer, openDrawer } = NavSlice.actions;
export default NavSlice.reducer;
