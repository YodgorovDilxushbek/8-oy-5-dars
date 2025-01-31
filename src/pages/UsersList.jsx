import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "../store/usersSlice";
import UserForm from "./UserForm";

function UsersList() {
    const dispatch = useDispatch();
    const { users = [], status, error } = useSelector((state) => state.users || {});
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("name"); 

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const filteredUsers = (users || [])
        .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">📋 Foydalanuvchilar Ro'yxati</h1>

            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Qidirish..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded w-1/2"
                />
                <select className="border p-2 rounded" onChange={(e) => setSortBy(e.target.value)}>
                    <option value="name">Ism bo‘yicha</option>
                    <option value="email">Email bo‘yicha</option>
                </select>
            </div>

            {status === "loading" && <p>Yuklanmoqda...</p>}

            {status === "failed" && <p className="text-red-500">Xatolik yuz berdi: {error}</p>}

            {status === "succeeded" && users.length === 0 && <p className="text-center">Hozircha foydalanuvchilar mavjud emas.</p>}

            {status === "succeeded" && users.length > 0 && (
                <table className="w-full bg-white shadow-md rounded">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2">Ism</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Amallar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-2">{user.name}</td>
                                <td className="p-2">{user.email}</td>
                                <td className="p-2 flex gap-2">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded">✏️ Tahrirlash</button>
                                    <button
                                        onClick={() => dispatch(deleteUser(user.id))}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        🗑 O‘chirish
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <UserForm />
        </div>
    );
}

export default UsersList;
