import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const AddTaskList = ({addTask}) => {
  
  const [newTask, setNewTask] = useState('');
  const addTaskNew = () => {
    addTask(newTask)
    setNewTask('')
}
  return (
    <div>
      <h2>Task List</h2>
      <TextField
        label="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button variant="contained" onClick={addTaskNew}>
        Add Task
      </Button>
    
    </div>
  );
};

export default AddTaskList;
