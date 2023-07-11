import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    todo: string;
    userName: string;
    description: string;
  }

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
      },
      fetchTodos: () => {},
  },
});

export const { addTodo, setTodos, fetchTodos } = todoSlice.actions;

export default todoSlice.reducer;
