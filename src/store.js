import { configureStore } from '@reduxjs/toolkit';
import todoReducer  from './components/todoSlice';

export default configureStore({
    reducer: {
        todos: todoReducer
    }
})