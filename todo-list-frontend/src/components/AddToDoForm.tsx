import React, { useState } from 'react';

interface AddToDoFormProps {
  addTodo: (todo: string) => void;
}

const AddToDoForm: React.FC<AddToDoFormProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-700">
        Add
      </button>
    </form>
  );
};

export default AddToDoForm;
