import { createContext, useContext, useReducer } from 'react';
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

const TodoReducer = (state, action) => {
    switch(action.type) {
        case 'added_todo': {

        }
        case 'changed_todo': {

        }
        case 'deleted_todo': {

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