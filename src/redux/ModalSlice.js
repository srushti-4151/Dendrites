import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalContent: null,
    },
    reducers: {
        openModal: (state, action) => {
            state.modalContent  = action.payload;
        },
        closeModal: (state) => {
            state.modalContent  = null;
        }
    }
});


export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;