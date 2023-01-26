import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import dayjs from 'dayjs';

function App() {

    const todoData = [
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

  const [listTasks, setListTasks] = useState(todoData);
  const [showListTasks, setShowListTasks] = useState([]);
  const [modeSort, setModeSort] = useState('All');

  const handleSubmit = (task) => {
    setListTasks([
        ...listTasks,
        {
            ...task,
        }
    ]);
  }

  const handleDelete = (_id) => {
    setListTasks(
        listTasks.filter( t => t._id !==  _id)
    )

  }

  const handleCheck = (task) => {
    setListTasks(
        listTasks.map( t => {
            if (t._id === task._id) {
                let checkedTask = {
                    ...task,
                    status: !task.status,
                }
                return checkedTask;
            } else {
                return t;
            }
        })
    );
  }

  const handleEdit = (task) => {
    setListTasks(
        listTasks.map( t => {
            if ( t._id === task._id) {
                return task;
            } else {
                return t;
            }
        })
    )
  }

  const handleSortList = (mode) => {
    setModeSort(mode);
  }

  useEffect(() => {
    if( modeSort === 'All') {
        setShowListTasks(
            listTasks
        )
    } else if ( modeSort === 'Incomplete') {
        let sortedListTasks = listTasks.filter( t =>  !t.status  );
        setShowListTasks(
            sortedListTasks
        )
    } else {
        let sortedListTasks = listTasks.filter( t => t.status  );
        setShowListTasks(
            sortedListTasks
        )
    }
  },[listTasks, modeSort])


  return (
    <div className="flex flex-col items-center w-full h-full bg-white my-10 gap-6">
            <h1 className="text-4xl font-bold uppercase text-gray-600">ToDo List</h1>
            <Header 
                handleSubmit={handleSubmit}
                sortHandler={handleSortList}
             />
            <Todos 
                tasks={showListTasks}
                checkHandler={handleCheck}
                deleteHandler={handleDelete}
                editeHandler={handleEdit}  />
        </div>
  );
}

export default App;
