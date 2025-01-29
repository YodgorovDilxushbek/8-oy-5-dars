import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">Redux Toolkit App</h1>
                <nav className="flex space-x-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-300 font-semibold underline"
                                : "hover:text-yellow-300 transition"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/todos"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-300 font-semibold underline"
                                : "hover:text-yellow-300 transition"
                        }
                    >
                        Todos
                    </NavLink>
                    <NavLink
                        to="/users"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-300 font-semibold underline"
                                : "hover:text-yellow-300 transition"
                        }
                    >
                        Users
                    </NavLink>
                    <NavLink
                        to="/user-form"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-300 font-semibold underline"
                                : "hover:text-yellow-300 transition"
                        }
                    >
                        Add User
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
