import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TodoList from "./pages/TodoList";
import UsersList from "./pages/UsersList";
import UserForm from "./pages/UserForm";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/products" element={<ProductList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
