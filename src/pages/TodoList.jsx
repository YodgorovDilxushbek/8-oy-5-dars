import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../store/todosSlice.js';

function TodoList() {
    const [newTodo, setNewTodo] = useState('');
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch(addTodo({
                id: Date.now(),
                text: newTodo,
                completed: false,
            }));
            setNewTodo('');
        }
    };

    return (
        <div className="h-screen w-{100%} flex items-center justify-center  p-6">
            <div className="w-full max-w-lg p-6 rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20">
                <h2 className="text-3xl font-extrabold text-gray text-center mb-6"> Todo List</h2>

                <div className="flex gap-3">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Add a new task..."
                        className="flex-1 p-3 bg-white/20 border border-white/30 rounded-xl text-gray-600 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                    <button
                        onClick={handleAddTodo}
                        className="px-5 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all"
                    >
                        Add
                    </button>
                </div>

                <ul className="mt-6 space-y-4">
                    {todos.map(todo => (
                        <li key={todo.id} className="flex items-center justify-between p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-md">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => dispatch(toggleTodo(todo.id))}
                                    className="w-5 h-5 accent-yellow-400 cursor-pointer"
                                />
                                <span className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-400' : 'text-gray'}`}>
                                    {todo.text}
                                </span>
                            </div>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 active:bg-red-700 shadow-lg hover:shadow-xl transition"
                            >
                                Delete ❌
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
