import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todosSlice';

export const store = configureStore({
   reducer: {
      todos: todosReducer,
   },
});

// Types for use in useSelector and useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;