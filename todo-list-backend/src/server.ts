import { app } from './index';

const PORT = 5000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default server;
