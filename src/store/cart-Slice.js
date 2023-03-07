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
        emptyEntireCart(state, action) {
            state.cartList = [];
        },
        removeQuantityFromCart(state, action) {

            const id = action.payload;
            const existingItem = state.cartList.find((item) => item.id === id);
            console.log(existingItem);

            if (existingItem.totalQuantity === 1) {
                state.cartList = state.cartList.filter((item) => item.id !== id);
                console.log(existingItem.price)
                console.log(existingItem.totalQuantity)
            } else {
                existingItem.totalQuantity--;
                existingItem.price -= existingItem.price;
            }
        },
        // addingQuantityToCart(state, action) {
        //     const id = action.payload;
        //     const existingItem = state.cartList.find((item) => item.id === id);
        //     if (existingItem.totalQuantity !== 1) {
        //         state.cartList = state.cartList.filter((item) => item.id !== id);
        //         console.log(existingItem.price)
        //         console.log(existingItem.totalQuantity)
        //     } else {
        //         existingItem.totalQuantity++;
        //         existingItem.price -= existingItem.price;
        //     }
        // }

        // addingQuantityToCart(state, action) {
        //     console.log(`intra1?`)
        //     const id = action.payload;
        //     const existingItemIndex = state.cartList.findIndex((item) => item.id === id);
        //     if (existingItemIndex >= 0) {
        //         console.log(`intra2?`)
        //         const existingItem = state.cartList[existingItemIndex];
        //         existingItem.totalQuantity++;
        //     }
        // }

        addingQuantityToCart(state, action) {
            const id = action.payload;
            const existingItemIndex = state.cartList.findIndex((item) => item.id === id);
            console.log(existingItemIndex)
            console.log('intra 1?');
            if (existingItemIndex >= 0) {
                console.log('intra 2?');
            } else {
                const existingItem = state.cartList[existingItemIndex];
                existingItem.totalQuantity++;

            }
        }


    }
})
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;