import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: '1', name: 'Tab1' },
    { id: '2', name: 'Tab2' },
];
const tabSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        addTab: (state, action) => {
            state.push(action.payload);
        },
        editTab: (state, action) => {
            const { id, name, email } = action.payload;
            const existingUser = state.find(user => user.id === id);
            if (existingUser) {
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        deleteTab: (state, action) => {
            const { id } = action.payload;
            const existingUser = state.find(user => user.id === id);
            if (existingUser) {
                return state.filter(user => user.id !== id);
            }
        }
    }
})
export const { addTab, editTab, deleteTab } = tabSlice.actions;
export default tabSlice.reducer;