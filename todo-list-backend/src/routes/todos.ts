import express from 'express';
import { z } from 'zod';

const router = express.Router();

let todos: { id: number, title: string, items: { id: number, content: string }[] }[] = [];
let currentId = 1;
let currentItemId = 1;

const todoSchema = z.object({
  title: z.string().min(1),
});

const todoItemSchema = z.object({
  content: z.string().min(1),
});

router.get('/', (req, res) => {  // Note the '/' here
  res.json(todos);
});

router.post('/', (req, res) => {  // Note the '/' here
  const parseResult = todoSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.errors });
  }

  const newTodo = {
    id: currentId++,
    title: req.body.title,
    items: [],
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.status(204).end();
});

router.post('/:id/items', (req, res) => {
  const parseResult = todoItemSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.errors });
  }

  const { id } = req.params;
  const todo = todos.find(todo => todo.id === parseInt(id));
  if (todo) {
    const newItem = { id: currentItemId++, content: req.body.content };
    todo.items.push(newItem);
    res.status(201).json(newItem);
  } else {
    res.status(404).json({ message: 'To-do not found' });
  }
});

router.delete('/:id/items/:itemId', (req, res) => {
  const { id, itemId } = req.params;
  const todo = todos.find(todo => todo.id === parseInt(id));
  if (todo) {
    todo.items = todo.items.filter(item => item.id !== parseInt(itemId));
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'To-do not found' });
  }
});

export default router;
