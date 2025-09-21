import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosState } from '../types/todos';

const initialState: TodosState = { todos: [] };

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state: TodosState, action: PayloadAction<{ text: string; date: string }>) => {
      state.todos.push({
        id: Date.now().toString(),
        text: action.payload.text,
        completed: false,
        date: action.payload.date,
      });
    },
    toggleTodo: (state: TodosState, action: PayloadAction<string>) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state: TodosState, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
