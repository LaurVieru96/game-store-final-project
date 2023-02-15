import { createSlice } from "@reduxjs/toolkit";


const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoritesList: [],
        // showFavorites: false,
    },
    reducers: {
        addToFavorites(state, action) {
            const favoritesItems = action.payload;
            const existingItem = state.favoritesList.find((item) => item.id === favoritesItems.id);
            if (existingItem) {
                console.log(`test`);
            } else {
                state.favoritesList.push({
                    id: favoritesItems.id,
                    title: favoritesItems.title,
                    price: favoritesItems.price
                })
            }
        },
        removeFromFavorites(state, action) {
            const id = action.payload;
            const existingItem = state.favoritesList.find((item) => item.id === id);
            if (!existingItem) {
                console.log(`test` + id)
            }
        }
    }
})


export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice;