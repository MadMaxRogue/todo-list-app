import React, { useEffect, useState } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../utils/api';

interface Todo {
    _id: string;
    title: string;
    completed: boolean;
}

const HomePage: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodoTitle, setNewTodoTitle] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await getTodos();
                setTodos(data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        fetchTodos();
    }, []);

    const handleAddTodo = async () => {
        try {
            const newTodo = await addTodo({ title: newTodoTitle });
            setTodos([...todos, newTodo]);
            setNewTodoTitle('');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const handleUpdateTodo = async (id: string, completed: boolean) => {
        try {
            const updatedTodo = await updateTodo(id, { title: todos.find(todo => todo._id === id)?.title || '', completed });
            setTodos(todos.map(todo => (todo._id === id ? updatedTodo : todo)));
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const handleDeleteTodo = async (id: string) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
                <div className="mb-4 flex">
                    <input
                        type="text"
                        value={newTodoTitle}
                        onChange={(e) => setNewTodoTitle(e.target.value)}
                        placeholder="New Todo"
                        className="flex-grow p-2 border border-gray-300 rounded-l"
                    />
                    <button
                        onClick={handleAddTodo}
                        className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition"
                    >
                        Add Todo
                    </button>
                </div>
                <ul className="space-y-2">
                    {todos.map(todo => (
                        <li key={todo._id} className="flex items-center justify-between p-2 border border-gray-200 rounded">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={(e) => handleUpdateTodo(todo._id, e.target.checked)}
                                    className="mr-2"
                                />
                                <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
                            </div>
                            <button
                                onClick={() => handleDeleteTodo(todo._id)}
                                className="p-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
