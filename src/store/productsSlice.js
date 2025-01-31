import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: "Telefon", price: 1000, image: "	https://images.uzum.uz/cu9p7ndht56ksubfb850/original.jpg", quantity: 0 },
    {
        id: 2, name: "Noutbuk", price: 1500, image: "	https://frankfurt.apollo.olxcdn.com/v1/files/6vif2kt4aipp-UZ/image;s=1000x700", quantity: 0
    },
    {
        id: 3, name: "Quvvatlagich", price: 50, image: "	https://frankfurt.apollo.olxcdn.com/v1/files/sgqkmt0opfwn1-UZ/image;s=1000x700", quantity: 0
    },
    {
        id: 4, name: "Quloqchin", price: 200, image: "https://images.uzum.uz/cphd5u7frr82f0a5q1q0/original.jpg", quantity: 0
    },
];

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
});

export default productsSlice.reducer;
