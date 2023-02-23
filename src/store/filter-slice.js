import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: {
            platform: '',
        }
    },
    reducers: {
        setPlatformFilter(state, action) {
            state.platform = action.payload;
        }
    }
})

export const filterActions = filterSlice.actions;
export default filterSlice;