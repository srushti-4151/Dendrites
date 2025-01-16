import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../redux/ModalSlice.js';
import navReducer from '../redux/NavSlice.js';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    nav: navReducer,
  },
});

export default store;
