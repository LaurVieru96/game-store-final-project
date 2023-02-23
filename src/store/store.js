import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import favoritesSlice from "./favorites-slice";
import filterSlice from "./filter-slice";

const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        cart: cartSlice.reducer,
        filter: filterSlice.reducer,
    }
})

export default store;