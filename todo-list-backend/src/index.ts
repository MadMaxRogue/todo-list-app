import express from 'express';
import mongoose from 'mongoose';
import todoRoutes from './routes/todos';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

mongoose.connect('mongodb://localhost:27017/todo-list', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to MongoDB', error);
});
