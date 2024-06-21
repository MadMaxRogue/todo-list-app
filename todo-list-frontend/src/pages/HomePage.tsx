import React, { useEffect, useState } from 'react';
import { fetchTodos } from '../utils/api'; // Ensure this path is correct

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    getTodos();
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default HomePage;
