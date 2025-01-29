import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/usersSlice";

function UserForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email) {
            dispatch(addUser(formData));
            setFormData({ name: "", email: "" });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">➕ Yangi Foydalanuvchi</h2>
            <input
                type="text"
                placeholder="Ism"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border p-2 w-full rounded mb-2"
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border p-2 w-full rounded mb-2"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded">Qo‘shish</button>
        </form>
    );
}

export default UserForm;
