import { useState } from 'react';
import DialogTodoItem from './DialogTodoItem';
import { useTodosDispatch } from './TodoContext';

const Header = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useTodosDispatch();

    return(
        <div className="flex justify-between w-2/4">
            <button onClick={() => setOpen(true)}
             className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-md px-5 py-2">Add Task</button>
            <select onChange={
                (e) => dispatch({
                    type: 'sorted_todo',
                    payload: e.target.value
                })
            }
             className="bg-gray-300 rounded-lg font-medium text-gray-600 px-4 py-2" >
                <option value="All">All</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Complete</option>
            </select>

            { open && <DialogTodoItem mode="add" open={open} setOpen={setOpen} /> }

        </div>
    )
}

export default Header;
