import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import usersReducer from "./usersSlice";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer: {

        cart: todosReducer,
        users: usersReducer,
        products: productsReducer,
        cart: cartReducer,

    },
});

export default store;
