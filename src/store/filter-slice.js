import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        platform: [],
    },
    reducers: {
        setPlatformFilter(state, action) {
            state.platform = action.payload;
            console.log(state.platform);
        }
    }
})



export const filterActions = filterSlice.actions;
export default filterSlice.reducer;