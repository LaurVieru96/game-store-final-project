import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-Slice";
import favoritesSlice from "./favorites-slice";

const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store;