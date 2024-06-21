const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Sample data
let todos = [
  { id: 1, title: 'Sample todo', items: [] },
];

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
