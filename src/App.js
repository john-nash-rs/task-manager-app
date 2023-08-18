import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddTaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';

const App = () => {

  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
  };
  return (
    <Router>
      <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/task">Task</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" exact element={<AddTaskList addTask={addTask}/>} />
          <Route path="/task" element={<TaskDetails tasks={tasks}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
