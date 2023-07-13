import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bill: 0,
    tip: 0,
    numberOfPeople: 1,
}

export const tipSlice = createSlice({
    name: 'tip',
    initialState,
    reducers: {
        setBill: (state, action) => {
            state.bill = action.payload;
        },
        setTip: (state, action) => {
            state.tip = action.payload;
        },
        setNumberOfPeople: (state, action) => {
            state.numberOfPeople = action.payload;
        },
        resetStore: (state, _) => {
            state.bill = 0;
            state.tip = 0;
            state.numberOfPeople = 1;
        },
    }
})

export const { setBill, setTip, setNumberOfPeople, resetStore } = tipSlice.actions;
export default tipSlice.reducer;

