

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
        // addToCart(state, action) {
        //     const cartItems = action.payload;
        //     const existingItem = state.cartList.find((item) => item.id === cartItems.id);
        //     if (existingItem) {
        //         existingItem.totalQuantity++;

        //         console.log(existingItem.price);
        //         console.log(cartItems.price);


        //         let existingItemPrice = Number(existingItem.price.split("$").filter(Boolean))
        //         console.log(existingItemPrice);
        //         let cartItemPrice = Number(cartItems.price.split("$").filter(Boolean))
        //         console.log(cartItemPrice);

        //         console.log(existingItemPrice += cartItemPrice)
        //         existingItemPrice += cartItemPrice


        //         // let total = 0;
        //         // let total = existingItem.price.split("$").filter(Boolean);
        //         // console.log(total)
        //         // for (let i = 0; i <= existingItem.price.length; i++) {
        //         //     let price = existingItem.price[i].split("$").filter(Boolean);
        //         //     console.log(price);
        //         //     total += price;
        //         //     console.log(total)
        //         // }

        //         // // existingItem.price = "$" + total.toFixed(2);
        //         // existingItem.price = "$" + total;

        //         // console.log(existingItem.price);
        //         // =======================================================================


        //     } else {
        //         state.cartList.push({
        //             id: cartItems.id,
        //             title: cartItems.title,
        //             image: cartItems.image,
        //             price: cartItems.price,
        //             totalQuantity: 1,
        //             users: cartItems.users,
        //             totalUsers: 1
        //         })
        //     }
        // },

        addToCart(state, action) {
            const cartItem = action.payload;
            const existingItemIndex = state.cartList.findIndex((item) => item.id === cartItem.id);
            if (existingItemIndex !== -1) {
                const existingItem = state.cartList[existingItemIndex];
                const existingItemPrice = Number(existingItem.price.replace("$", ""));
                const cartItemPrice = Number(cartItem.price.replace("$", ""));
                const updatedTotalQuantity = existingItem.totalQuantity + 1;
                const updatedPrice = (existingItemPrice + cartItemPrice).toFixed(2);
                const updatedCartItem = {
                    ...existingItem,
                    totalQuantity: updatedTotalQuantity,
                    price: `$${updatedPrice}`,
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