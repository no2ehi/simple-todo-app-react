import { createContext, useContext, useReducer, useState } from 'react';
import dayjs from 'dayjs';

const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(TodoReducer, initialTodos);

    return(
        <TodosContext.Provider value={todos}>
            <TodosDispatchContext.Provider value={dispatch}>
                {children}
            </TodosDispatchContext.Provider>
        </TodosContext.Provider>
    )
}

const TodoReducer = (todos, action) => {
    // const [copyTodos, setCopyTodos] = useState(todos);

    switch(action.type) {
        case 'added_todo': {
            return [
                ...todos, 
                action.task       
            ]
        }
        case 'changed_todo': {
            // console.log(action.task);
            return todos.map( t => {
                    if (t._id === action.task._id) {
                    return {
                        ...action.task,
                        status: action.status
                    }
                } else {
                    return t;
            }}); 
        }
        case 'sorted_todo': {
            // console.log('todos: ', ...todos);
            if( action.mode === 'All') {
                // todos = copyTodos;
                return todos;
            } else if ( action.mode === 'Incomplete') {
                let sortedListTasks = todos.filter( t => !t.status  );
                // setCopyTodos(todos);
                return sortedListTasks;
            } else {
                let sortedListTasks = todos.filter( t => t.status  );
                // setCopyTodos(todos);
                return sortedListTasks;
            }
        }
        case 'deleted_todo': {
            console.log('hi',action._id)
            return todos.filter( t => t._id !== action._id)
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }

}

export const useTodos = () => {
    return useContext(TodosContext);
}

export const useTodosDispatch = () => {
    return useContext(TodosDispatchContext);
}

const initialTodos =[
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
]