import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./favorites-slice";

const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
    }
})

export default store;