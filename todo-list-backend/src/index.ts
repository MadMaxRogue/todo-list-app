import express from 'express';
import cors from 'cors';
import authRoutes from './routes/index';
import todoRoutes from './routes/todos';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export { app, server };
