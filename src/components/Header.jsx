const Header = ({ handleSubmit, sortHandler }) => {

    return(
        <div className="flex justify-between w-2/4">
            <button 
             className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-md px-5 py-2">Add Task</button>
            <select 
             className="bg-gray-300 rounded-lg font-medium text-gray-600 px-4 py-2" >
                <option value="All">All</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Complete</option>
            </select>

            

        </div>
    )
}

export default Header;
