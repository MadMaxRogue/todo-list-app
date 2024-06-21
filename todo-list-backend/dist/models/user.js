"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.findUserByUsername = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
let users = [];
let currentId = 1;
const createUser = (username, password) => {
    const hashedPassword = bcryptjs_1.default.hashSync(password, 10);
    const newUser = { id: currentId++, username, password: hashedPassword };
    users.push(newUser);
    return newUser;
};
exports.createUser = createUser;
const findUserByUsername = (username) => {
    return users.find(user => user.username === username);
};
exports.findUserByUsername = findUserByUsername;
const validatePassword = (password, hash) => {
    return bcryptjs_1.default.compareSync(password, hash);
};
exports.validatePassword = validatePassword;
