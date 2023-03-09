

import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        totalQuantity: 0,
        totalUsers: 1
    },

    reducers: {
        addToCart(state, action) {
            const cartItems = action.payload;
            const existingItem = state.cartList.find((item) => item.id === cartItems.id);
            if (existingItem) {
                existingItem.totalQuantity++;
                // console.log("price string", existingItem.price);
                // let price = Number(existingItem.price.replace(/\$/g, ''));

                // price += Number(existingItem.price.replace(/\$/g, ''));
                // console.log("price number", price);

                console.log("CART-SLICE", existingItem.test);

            } else {
                state.cartList.push({
                    id: cartItems.id,
                    title: cartItems.title,
                    image: cartItems.image,
                    price: cartItems.price,
                    totalQuantity: 1,
                    users: cartItems.users,
                    totalUsers: 1
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
        emptyEntireCart(state) {
            state.cartList = [];
        },
        removeQuantityFromCart(state, action) {

            const id = action.payload;
            const existingItem = state.cartList.find((item) => item.id === id);
            console.log(existingItem)
            if (existingItem.totalQuantity === 1) {
                state.cartList = state.cartList.filter((item) => item.id !== id);
                console.log(existingItem.price)
                console.log(existingItem.totalQuantity)
            } else {
                existingItem.totalQuantity--;
                existingItem.users -= existingItem.users;
                // existingItem.price -= existingItem.price;
                // console.log(existingItem.price)
            }
        },
    }
})
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;