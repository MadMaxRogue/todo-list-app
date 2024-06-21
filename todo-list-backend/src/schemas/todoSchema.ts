import { z } from 'zod';

export const createTodoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
});

export const addItemSchema = z.object({
  title: z.string().min(1, 'Title is required'),
});
