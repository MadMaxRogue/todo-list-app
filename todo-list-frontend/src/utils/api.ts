import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Ensure this URL is correct
});

export const fetchTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
};
