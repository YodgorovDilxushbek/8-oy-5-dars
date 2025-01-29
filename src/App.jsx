import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TodoList from "./pages/TodoList";
import UsersList from "./pages/UsersList";
import UserForm from "./pages/UserForm";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Header />
                <div className="container mx-auto p-4">
                    <Routes>
                        <Route path="/" element={<h1 className="text-center text-2xl">Bosh sahifa</h1>} />
                        <Route path="/todos" element={<TodoList />} />
                        <Route path="/users" element={<UsersList />} />
                        <Route path="/user-form" element={<UserForm />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
