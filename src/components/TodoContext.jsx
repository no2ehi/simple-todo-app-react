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

const TodoReducer = ({data: todos, filteredData}, { type, payload, status }) => {
    switch(type) {
        case 'added_todo': {
            let data = [
                ...todos, 
                    {
                        ...payload
                    }
                ];
                return {
                    data: data,
                    filteredData: null
                };
                
        }
        case 'changed_todo': {
            
            let data = todos.map( t => {
                if (t._id === payload._id) {
                return {
                    ...payload,
                    status: status
                }
                } else {
                    return t;
                }
            });

            return {
                data: data,
                filteredData: null
            }

        }
        case 'sorted_todo': {
            if( payload === 'All') {
                return {
                    data: todos,
                    filteredData: null
                };
            } else if ( payload === 'Incomplete') {            
                return {
                    data: todos,
                    filteredData: todos.filter( t => !t.status )
                };
            } else {
                return {
                    data: todos,
                    filteredData: todos.filter( t => t.status )
                }
            }
        }
        case 'deleted_todo': {
            let data = todos.filter( t => t._id !== payload._id);
            return {
                data: data,
                filteredData: null
            }
        }
        default: {
            throw Error('Unknown action: ' + payload.type);
        }
    }

}

export const useTodos = () => {
    return useContext(TodosContext);
}

export const useTodosDispatch = () => {
    return useContext(TodosDispatchContext);
}

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