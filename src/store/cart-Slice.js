import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: []
    },
    reducers: {
        addToCart(state, action) {
            const cartItems = action.payload;
            const existingItem = state.cartList.find((item) => item.id === cartItems.id);
            if (existingItem) {
                console.log(`Added item successfully !`);
            } else {
                state.existingItem.push({
                    id: existingItem.id,
                    title: existingItem.title,
                    price: existingItem.price
                })
            }
        }
    }
})
export const cartActions = cartSlice.actions;

export default cartSlice;