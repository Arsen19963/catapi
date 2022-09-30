import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {},
    reducers: {
        filterByCategory: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { filterByCategory } = categoriesSlice.actions

export default categoriesSlice.reducer;