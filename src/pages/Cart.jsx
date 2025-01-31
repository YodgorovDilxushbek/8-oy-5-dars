import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";

function Cart() {
    const { items, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleClear = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Savat</h2>
            {items.length === 0 ? (
                <p>Savat bo'sh!</p>
            ) : (
                <div>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id} className="border-b py-2 flex justify-between">
                                <span>{item.name} (x{item.quantity})</span>
                                <span>{item.price * item.quantity} so'm</span>
                                <button
                                    className="text-red-500"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    O'chirish
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <p className="font-bold">Umumiy summa: {totalAmount} so'm</p>
                        <button
                            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                            onClick={handleClear}
                        >
                            Savatni tozalash
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
