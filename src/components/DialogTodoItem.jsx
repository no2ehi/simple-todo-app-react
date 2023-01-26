import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { v4 as uuid } from 'uuid';


const DialogTodoItem = ({ mode, open, setOpen, handleSubmit, taskEdited }) => {
    let id = uuid();
    
    const [task, setTask] = useState({
        _id: id,
        title: '',
        status: false,
        deadline: dayjs('2018-08-18T21:11:54'),
    });
    const [dateOpen, setDateOpen] = useState(false);

    const handleChangeTask = (e) => {
        if (mode === 'edit') {
            setTask({
                ...taskEdited,
                [e.target.name]: e.target.value,
            })
        } else {
            setTask({
                ...task,
                [e.target.name]: e.target.value,
                _id: id
            })  
        }
    };

    const handleChangeDateTask = (e) => {
        if (mode === 'edit') {
            setTask({
                ...taskEdited,
                deadline: e
            })
        } else {
            setTask({
                ...task,
                deadline: e
            })
        }  
    };
    
    const submitHandler = () => {
        handleSubmit(task)
        setOpen(false);
        setTask({
            _id: "",
            title: "",
            status: false,
            deadline: dayjs('2018-08-18T21:11:54')
        });
    }

    useEffect(() => {
        if( mode === 'edit' ) {
            setTask({
                ...taskEdited
            })
        }
    },[])

    return(
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth={true} maxWidth="xs">
            <DialogTitle>{ mode === 'add' ? "Add" : "Edit"} Task</DialogTitle>
                <DialogContent className="my-2 ">
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        '& .MuiTextField-root': { my: 2.5 },
                    }}
                    >
                        <TextField
                            name="title"
                            autoFocus
                            label="Title"
                            type="text"
                            fullWidth
                            value={task.title}
                            onChange={handleChangeTask}
                            required
                        />
                        <TextField
                            name="status"
                            select
                            label="Status"
                            defaultValue="Incompelete"
                            fullWidth
                            value={task.status}
                            onChange={handleChangeTask}
                            required
                            >
                                <MenuItem value={false}>Incompelete</MenuItem>
                                <MenuItem value={true}>Compeleted</MenuItem>
                        </TextField>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="Date&Time picker"
                                value={task.deadline}
                                open={dateOpen}
                                onOpen={() => setDateOpen(true)}
                                onClose={() => setDateOpen(false)}
                                onChange={handleChangeDateTask}    
                                renderInput={(params) => <TextField  fullWidth {...params}
                                onClick={() => setDateOpen(true)} />}
                            />
                        </LocalizationProvider> 
                    </Box>
                </DialogContent>
                <DialogActions>
                    <button onClick={() => setOpen(false)}
                    className="bg-gray-300 hover:bg-gray-200 text-gray-600 font-medium rounded-md px-5 py-2">Cancel</button>
                    <button onClick={submitHandler}  type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-md px-5 py-2">
                        { mode === 'add' ? "Add" : "Edit"} Task</button>
                </DialogActions>
        </Dialog>
    )
}

export default DialogTodoItem;