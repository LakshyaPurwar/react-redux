import { createSlice } from "@reduxjs/toolkit";
import { uiAction } from "./ui";
//TODO:
//1.Create a slice : 
//a.Set name , Set initial State , set reducers.
//2.Export reducer of slice as default.
//3.Export the action of the slice as const.

//4.In the reducer function  ,we must loop through the array and check if it contains the item
//5.If it does , then increment its quantity
//6.Otherwise , add the payload object representing the item into the cartItems array.

const initialState = {
    showCart: true,
    cartItems: [
        { title: 'Test Item', quantity: 3, total: 18, price: 6 }
    ],
    changed : false
};
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        initializeCart(state, action) {
            state.cartItems = action.payload;

        },
        addItem(state, action) {

            state.cartItems.push(action.payload);
            state.changed = true;

        },
        incrementItemQuantity(state, action) {
            state.cartItems = state.cartItems.map((cartItem, index, cartItems) => {
                if (cartItem.title === action.payload) {
                    cartItem.quantity++;
                    state.changed = true;
                }
                return cartItem;
            });
        },
        decrementItemQuantity(state, action) {
            const newState = [];

            for (const cartItem of state.cartItems) {
                if (cartItem.title === action.payload) {
                    cartItem.quantity = cartItem.quantity - 1;
                }
                if (cartItem.quantity === 0) {
                    //I should not push it to the array
                }
                else {
                    newState.push(cartItem);
                }
            }
            state.cartItems = newState;
            state.changed = true;

        },
        addItemToCart(state, action) {
            const newStateCart = [];
            const item = action.payload;
            let updated = false;
            for (const cartItem of state.cartItems) {
                if (cartItem.title === item.title) {
                    //Then we must only increment the quantity and add to the new cartItems list
                    cartItem.quantity++;
                    updated = true;
                }
                newStateCart.push(cartItem);

            }

            if (!updated) {
                newStateCart.push({ title: item.title, quantity: 1, total: item.price, price: item.price });
            }
            state.cartItems = newStateCart;
            state.changed = true;
        }
    }
});




export const cartAction = cartSlice.actions;
export default cartSlice.reducer;