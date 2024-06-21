import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import AddToDoForm from './AddToDoForm';

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <AddToDoForm addTodo={addTodo} />
      <ul className="mt-4 space-y-2">
        {todos.map((todo, index) => (
          <ToDoItem key={index} todo={todo} index={index} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
