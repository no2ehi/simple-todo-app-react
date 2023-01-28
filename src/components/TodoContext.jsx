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

const TodoReducer = (todos, { type, payload, status }) => {
    switch(type) {
        case 'added_todo': {
            return [
                ...todos, 
                    {
                        ...payload
                    }
                ]
        }
        case 'changed_todo': {
            
            return todos.map( t => {
                if (t._id === payload._id) {
                return {
                    ...payload,
                    status: status
                }
            } else {
                return t;
        }});
        }
        case 'sorted_todo': {
            // console.log(payload, 'todos ::: ', todos.data,'%% filtered: ', todos.filteredData)
            // if( payload === 'All') {
            //     return {
            //         ...todos,
            //         filteredData: null
            //     };
            // } else if ( payload === 'Incomplete') {

            //     return {
            //        ...todos,
            //         filteredData: todos.data.filter( t => !t.status  )
            //     };
            // } else {
            //     let sortedListTasks = todos.data.filter( t => t.status  );

            //     return {
            //         ...todos,
            //         filteredData: sortedListTasks
            //     }
            // }
        }
        case 'deleted_todo': {
            return todos.filter( t => t._id !== payload._id);
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

const initialTodos = [
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

// const initialTodos2 = {
//     data: [
//         {
//             _id: 1,
//             title: 'Read boyd language book',
//             status: false,
//             deadline: dayjs('2020-09-18T17:11:54'),
//         },
//         {
//             _id: 2,
//             title: 'Do My Home Work',
//             status: true,
//             deadline: dayjs('2012-02-18T10:16:04'),
//         },
//         {
//             _id: 3,
//             title: 'create mini project react',
//             status: false,
//             deadline: dayjs('2018-08-18T21:11:54'),
//         },
//     ],
//     filteredData: null,
// }