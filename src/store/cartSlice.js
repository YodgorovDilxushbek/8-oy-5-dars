import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // Savatdagi mahsulotlar ro'yxati
        totalAmount: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalAmount += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (product) {
                state.totalAmount -= product.price * product.quantity;
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            }
        },
        updateQuantity: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (product) {
                const difference = action.payload.newQuantity - product.quantity;
                product.quantity = action.payload.newQuantity;
                state.totalAmount += difference * product.price;
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
