export interface TodoItem {
  id: number;
  title: string;
}

export interface Todo {
  id: number;
  title: string;
  items: TodoItem[];
}
