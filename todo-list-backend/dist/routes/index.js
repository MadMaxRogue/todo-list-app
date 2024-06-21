"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const router = express_1.default.Router();
const JWT_SECRET = 'your_jwt_secret_key'; // replace with a secure key
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    const existingUser = (0, user_1.findUserByUsername)(username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    const newUser = (0, user_1.createUser)(username, password);
    res.status(201).json(newUser);
});
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    const user = (0, user_1.findUserByUsername)(username);
    if (!user || !(0, user_1.validatePassword)(password, user.password)) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jsonwebtoken_1.default.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});
exports.default = router;
