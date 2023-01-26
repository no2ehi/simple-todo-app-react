
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const Task = ( { task } ) => {

    return(
        <div className="flex items-center  justify-between bg-white rounded-md px-3 w-full my-2 py-4 shadow-sm">
            <button >
                { !task.status ? <CheckBoxIcon color="primary" className="opacity-40"/> : 
                <CheckBoxIcon color="primary"  /> }
            </button>
            <div className="flex-1 flex flex-col mx-3">
                <span
                    className={`text-gray-700 font-medium ${task.status && 'line-through'} `} >
                        {task.title}
                </span>
                <span className="text-xs text-gray-700">{task.deadline.$d.toLocaleString()}</span>
            </div>
            <div className="">
                <button 
                 className="bg-gray-200 rounded-md p-1 mr-2"><DeleteIcon color="action" fontSize="small" /></button>
                <button 
                 className="bg-gray-200 rounded-md p-1"><EditIcon color="action" fontSize="small" /></button>
            </div>
           
        </div>
    )
}

export default Task;