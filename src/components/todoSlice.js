import { createSlice } from '@reduxjs/toolkit';

const initialTodos = {
    data: [
        {
            _id: 1,
            title: 'Read boyd language book',
            status: false,
            deadline: '8/30/2020, 5:25:54 PM',
        },
        {
            _id: 2,
            title: 'Do My Home Work',
            status: true,
            deadline: '1/30/2023, 5:25:54 PM',
        },
        {
            _id: 3,
            title: 'create mini project react',
            status: false,
            deadline: '8/30/2023, 5:25:54 PM',
        },

    ],
    modeSort: 'All',
    filteredData: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialTodos,
    reducers: {
        addTodo: (state , action) => {          
                state.data.push(action.payload)
        },
        changedTodo: (state, action) => {
            state.data = state.data.map( (todo) =>
                todo._id === action.payload._id ?  { ...action.payload } : todo
            )
        },
        checkTodo: (state, action) => {
            state.data = state.data.map( (todo) =>
            todo._id === action.payload._id ?  { ...action.payload , status: !action.payload.status } : todo
        )
        },
        deletedTodo: (state, action) => {
            state.data = state.data.filter( (t) => t._id !== action.payload._id)
        },
        filteredTodo: (state, action) => {
            switch(action.payload) {
                case 'All':
                    return {
                        data: state.data,
                        modeSort: 'All',
                        filteredData: null
                    }
                case 'Incomplete':
                    let sorted = state.data.filter( (todo) => !todo.status );
                    return {
                        data: state.data,
                        modeSort: 'Incomplete',
                        filteredData: sorted
                    }
                case 'Complete':
                    let sortedCompelete = state.data.filter( (todo) => todo.status );
                    return {
                        data: state.data,
                        modeSort: 'Complete',
                        filteredData: sortedCompelete
                    }
                default: 
                    return state.data;
            }
        }
    }
})

export const { addTodo, changedTodo, checkTodo, deletedTodo, filteredTodo } = todoSlice.actions;

export default todoSlice.reducer;


