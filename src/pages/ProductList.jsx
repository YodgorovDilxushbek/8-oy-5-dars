import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductList() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {products.map((product) => (
                <div key={product.id} className="border p-4  rounded shadow-md">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-600">${product.price}</p>
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="mt-2 bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Savatga qo'shish
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
