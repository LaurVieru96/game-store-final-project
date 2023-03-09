import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        totalQuantity: 0,
        totalUsers: 1,
        totalPrice: 0
    },
    reducers: {
        addToCart(state, action) {
            console.log("ACTION: ", action)
            const cartItem = action.payload;
            const existingItemIndex = state.cartList.findIndex((item) => item.id === cartItem.id);
            if (existingItemIndex !== -1) {
                const existingItem = state.cartList[existingItemIndex];
                const existingItemPrice = Number(existingItem.totalPrice.replace("$", ""));
                const cartItemPrice = Number(cartItem.price.replace("$", ""));
                const updatedTotalQuantity = existingItem.totalQuantity + 1;
                console.log("(existingItemPrice + cartItemPrice).toFixed(2)", (existingItemPrice + cartItemPrice).toFixed(2))
                const updatedPrice = (existingItemPrice + cartItemPrice).toFixed(2);
                console.log("updatedPrice", updatedPrice);
                const updatedCartItem = {
                    ...existingItem,
                    totalQuantity: updatedTotalQuantity,
                    price: cartItem.price,
                    // totalPrice: `$${updatedPrice}`,
                    totalPrice: `$${updatedPrice}`,
                };
                const updatedCartList = [...state.cartList];
                updatedCartList[existingItemIndex] = updatedCartItem;
                return {
                    ...state,
                    cartList: updatedCartList,
                };
            } else {
                const newCartItem = {
                    ...cartItem,
                    totalQuantity: 1,
                };
                return {
                    ...state,
                    cartList: [...state.cartList, newCartItem],
                };
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
            const cartItem = action.payload;
            const existingItemIndex = state.cartList.findIndex((item) => item.id === cartItem.id);
            if (existingItemIndex !== -1) {
                const existingItem = state.cartList[existingItemIndex];
                const existingItemPrice = Number(existingItem.totalPrice.replace("$", ""));
                const cartItemPrice = Number(cartItem.price.replace("$", ""));
                const updatedTotalQuantity = existingItem.totalQuantity - 1;
                console.log("(existingItemPrice - cartItemPrice).toFixed(2)", (existingItemPrice - cartItemPrice).toFixed(2))
                const updatedPrice = (existingItemPrice - cartItemPrice).toFixed(2);
                console.log("updatedPrice", updatedPrice);
                const updatedCartItem = {
                    ...existingItem,
                    totalQuantity: updatedTotalQuantity,
                    price: cartItem.price,
                    // totalPrice: `$${updatedPrice}`,
                    totalPrice: `$${updatedPrice}`,
                };
                const updatedCartList = [...state.cartList];
                updatedCartList[existingItemIndex] = updatedCartItem;
                return {
                    ...state,
                    cartList: updatedCartList,
                };
            } else {
                const newCartItem = {
                    ...cartItem,
                    totalQuantity: 1,
                };
                return {
                    ...state,
                    cartList: [...state.cartList, newCartItem],
                };
            }
        },
    }
})
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;