import bcrypt from 'bcryptjs';

interface User {
    id: number;
    username: string;
    password: string;
}

let users: User[] = [];
let currentId = 1;

export const createUser = (username: string, password: string): User => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = { id: currentId++, username, password: hashedPassword };
    users.push(newUser);
    return newUser;
};

export const findUserByUsername = (username: string): User | undefined => {
    return users.find(user => user.username === username);
};

export const validatePassword = (password: string, hash: string): boolean => {
    return bcrypt.compareSync(password, hash);
};
