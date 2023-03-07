import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: []
    },
    // TODO:
    // FIXME:
    reducers: {
        addToCart(state, action) {
            const cartItems = action.payload;
            const existingItem = state.cartList.find((item) => item.id === cartItems.id);
            if (existingItem) {
                console.log(`Game already in your cart !`)
            } else {
                state.cartList.push({
                    id: cartItems.id,
                    title: cartItems.title,
                    image: cartItems.image,
                    price: cartItems.price,
                    totalQuantity: 1
                })
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const index = state.cartList.findIndex((item) => item.id === id);
            if (index !== -1) {
                state.cartList.splice(index, 1);
            }
        },
        emptyEntireCart(state, action) {
            state.cartList = [];
        }

    }
})
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;