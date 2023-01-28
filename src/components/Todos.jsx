import Task from './TodoItem';
import { useTodos } from './TodoContext';

const Tasks = () => {

    const {data: todos, filteredData} = useTodos();

    return(
        <div className="flex flex-col items-center rounded-lg bg-gray-100 w-2/4 p-5 ">

            { filteredData != null ?  filteredData.map( (todo, i) => ( 
                <Task   key={i} 
                        todo={todo}
                          />
                )) : ( 
                    todos.length > 0 ? todos.map( (todo, i) => ( 
                        <Task   key={i} 
                                todo={todo}
                                  />
                        )) : (
                            <div className="flex flex-col items-center w-2/5 bg-gray-300 font-medium rounded p-2">
                                No Todo Found!
                            </div>
                        )
                )
            }
        </div>
    )
}

export default Tasks;