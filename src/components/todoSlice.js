import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialTodos = {
    data: [
        {
            _id: 1,
            title: 'Read boyd language book',
            status: false,
            deadline: dayjs('2020-09-18T17:11:54'),
        },
        {
            _id: 2,
            title: 'Do My Home Work',
            status: true,
            deadline: dayjs('2012-02-18T10:16:04'),
        },
        {
            _id: 3,
            title: 'create mini project react',
            status: false,
            deadline: dayjs('2018-08-18T21:11:54'),
        },

    ],
    filteredData: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialTodos,
    reducers: {
        addTodo: (state , action) => {
            
            state.data.push(action.payload);

        },
        changedTodo: (state, action) => {
            // console.log('state: ', state, 'action: ',action.payload);
            // console.log('statsu :: ', action.payload.status)
            // state.data = state.data.map( (todo) =>
            //     todo._id === action.payload._id ? 
            //         {   ...action.payload.todo,
            //             status: action.payload.status
            //         }
            //      : todo
            // )
        },
        deletedTodo: (state, action) => {
            state.data = state.data.filter( (t) => t._id !== action.payload._id)
        },
        filteredTodo: (state, action) => {

        }
    }
})

export const { addTodo, changedTodo, deletedTodo, filteredTodo } = todoSlice.actions;

export default todoSlice.reducer;


