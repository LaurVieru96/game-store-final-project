
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        totalQuantity: 0,
    },

    reducers: {
        addToCart(state, action) {
            const cartItems = action.payload;
            const existingItem = state.cartList.find((item) => item.id === cartItems.id);
            if (existingItem) {
                existingItem.totalQuantity++;

                // const prices = existingItem.price.split("$").filter(Boolean);
                // const sum = prices.reduce((acc, price) => acc + parseFloat(price), 0);
                // console.log(sum);

                existingItem.price += cartItems.price;


            } else {
                state.cartList.push({
                    id: cartItems.id,
                    title: cartItems.title,
                    image: cartItems.image,
                    price: cartItems.price,
                    totalQuantity: 1,
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

            if (existingItem.totalQuantity === 1) {
                state.cartList = state.cartList.filter((item) => item.id !== id);
                console.log(existingItem.price)
                console.log(existingItem.totalQuantity)
            } else {
                existingItem.totalQuantity--;

                // existingItem.price -= existingItem.price; // NaN string-number

                // const str = existingItem.price;
                // const nums = str.match(/\d+\.\d+/g).map(Number); // Extrage toate numerele din string și le transformă în numere reale
                // const sum = nums.reduce((total, num) => total + num, 0); // Adună toate numerele
                // console.log(sum);


                // existingItem.price -= sum;
            }
        },
    }
})
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;