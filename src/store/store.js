import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-Slice";
import favoritesSlice from "./favorites-slice";
import filterSlice from "./filter-slice";

const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        cart: cartSlice.reducer,
        filter: filterSlice,
    }
})

export default store;