import { app, server } from '../src/index'; // Ensure this path is correct
import request from 'supertest';

afterAll(() => {
    server.close();
});

describe('Todo API', () => {
    it('should fetch todos', async () => {
        const response = await request(app).get('/api/todos');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('should create a new todo', async () => {
        const newTodo = { title: 'Test todo' };
        const response = await request(app).post('/api/todos').send(newTodo);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe(newTodo.title);
    });
});
