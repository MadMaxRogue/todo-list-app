import express from 'express';
import jwt from 'jsonwebtoken';
import { createUser, findUserByUsername, validatePassword } from '../models/user';

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret_key'; // replace with a secure key

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const existingUser = findUserByUsername(username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = createUser(username, password);
    res.status(201).json(newUser);
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = findUserByUsername(username);
    if (!user || !validatePassword(password, user.password)) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

export default router;
