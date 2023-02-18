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
                console.log(`Added item successfully !`);
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
            console.log(id)
            const index = state.favoritesList.findIndex((item) => item.id === id);
            console.log(index)
            if (index !== -1) {
                state.favoritesList.splice(index, 1);
            }
        },
    }
})


export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice;