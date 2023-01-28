import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import { TodoProvider } from './components/TodoContext';

function App() {

  return (
    <TodoProvider>
        <div className="flex flex-col items-center w-full h-full bg-white my-10 gap-6">
            <h1 className="text-4xl font-bold uppercase text-gray-600">ToDo List</h1>
            <Header />
            <Todos />
        </div>
    </TodoProvider> 
  );
}

export default App;
