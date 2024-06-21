import React from 'react';

interface ToDoItemProps {
  todo: string;
  index: number;
  removeTodo: (index: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, index, removeTodo }) => {
  return (
    <li className="flex justify-between items-center bg-gray-200 p-2 rounded">
      <span>{todo}</span>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => removeTodo(index)}
      >
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
