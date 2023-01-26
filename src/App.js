import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {

  const [listTasks, setListTasks] = useState([]);

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


  return (
    <div className="flex flex-col items-center w-full h-full bg-white my-10 gap-6">
            <h1 className="text-4xl font-bold uppercase text-gray-600">ToDo List</h1>
            <Header 
                handleSubmit={handleSubmit}
             />
            <Todos 
                tasks={listTasks}
                deleteHandler={handleDelete}  />
        </div>
  );
}

export default App;
