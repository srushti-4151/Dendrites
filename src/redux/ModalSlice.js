import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalContent: null,
        isModalOpen: false, 
    },
    reducers: {
        openModal: (state, action) => {
            state.modalContent  = action.payload;
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.modalContent  = null;
            state.isModalOpen = false;
        }
    }
});


export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;