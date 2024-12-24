import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../redux/ModalSlice.js';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
