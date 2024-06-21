"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const router = express_1.default.Router();
let todos = [];
let currentId = 1;
let currentItemId = 1;
const todoSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
});
const todoItemSchema = zod_1.z.object({
    content: zod_1.z.string().min(1),
});
router.get('/todos', (req, res) => {
    res.json(todos);
});
router.post('/todos', (req, res) => {
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
router.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id !== parseInt(id));
    res.status(204).end();
});
router.post('/todos/:id/items', (req, res) => {
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
    }
    else {
        res.status(404).json({ message: 'To-do not found' });
    }
});
router.delete('/todos/:id/items/:itemId', (req, res) => {
    const { id, itemId } = req.params;
    const todo = todos.find(todo => todo.id === parseInt(id));
    if (todo) {
        todo.items = todo.items.filter(item => item.id !== parseInt(itemId));
        res.status(204).end();
    }
    else {
        res.status(404).json({ message: 'To-do not found' });
    }
});
exports.default = router;
