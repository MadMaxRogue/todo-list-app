import { Router } from 'express';
import Todo from '../models/todo';

const router = Router();

// GET /api/todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// POST /api/todos
router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo({
            title: req.body.title,
            completed: false,
        });
        const todo = await newTodo.save();
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// PUT /api/todos/:id
router.put('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE /api/todos/:id
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
