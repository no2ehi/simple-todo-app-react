import { useState } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DialogTodoItem from './DialogTodoItem';
import { useTodosDispatch } from './TodoContext';

const Task = ({ todo }) => {
    const [openEdit, setOpenEdit] = useState(false);
    const dispatch = useTodosDispatch();
    // console.log(todo.deadline)

    return(
        <div className="flex items-center  justify-between bg-white rounded-md px-3 w-full my-2 py-4 shadow-sm">
            <button onClick={ () =>
                dispatch({
                    type: 'changed_todo',
                    payload: todo,
                    status: !todo.status
                })
            } >
                { !todo.status ? <CheckBoxIcon color="primary" className="opacity-40"/> : 
                <CheckBoxIcon color="primary"  /> }
            </button>
            <div className="flex-1 flex flex-col mx-3">
                <span
                    className={`text-gray-700 font-medium ${todo.status && 'line-through'} `} >
                        {todo.title}
                </span>
                <span className="text-xs text-gray-700">{(todo.deadline.$d).toLocaleString()}</span>
            </div>
            <div className="">
                <button onClick={ () => 
                dispatch({
                        type: 'deleted_todo',
                        payload: todo
                    })
                    }
                 className="bg-gray-200 rounded-md p-1 mr-2"><DeleteIcon color="action" fontSize="small" /></button>
                <button onClick={ () => setOpenEdit(true)}
                 className="bg-gray-200 rounded-md p-1"><EditIcon color="action" fontSize="small" /></button>
            </div>
            { openEdit && 
            <DialogTodoItem mode="edit" open={openEdit} setOpen={setOpenEdit} taskEdited={todo} />
            }
        </div>
    )
}

export default Task;