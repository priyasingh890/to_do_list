

import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@material-ui/core';
import Show_add_data from './showadddata';
import FilterStatus from './statusfilter';

const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const App = () => {
  const [item, setItem] = useState(getLocalItems());
  const [taskInput, setTaskInput] = useState('');
  const [isEdit, setIsEdit] = useState('');
  const [selectedOption, setSelectedOption] = useState('All');

  const addTask = () => {
    if (isEdit !== '') {
      const updatedTasks = item.map((task) => (task.id === isEdit.id ? { ...task, text: taskInput } : task));
      setItem(updatedTasks);
      setTaskInput('');
      setIsEdit('');
    } else if (taskInput!== '') { 
      const userInputData = { text: taskInput, id: Date.now()};
      setItem([...item, userInputData]);
      
      setTaskInput('');
    }
  };
  

  const deleteItem = (id) => {
    const handleDeleteData = item.filter((task) => task.id !== id);
    setItem(handleDeleteData);
  };

  const editData = (id) => {
    const editEachItem = item.find((task) => task.id === id);
    setTaskInput(editEachItem.text);
    setIsEdit(editEachItem);
  };

  const allSelect = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(item));
  }, [item]);


  const toggleCompleted = (index) => {
    const updatedItems = [...item];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItem(updatedItems);
  };
  return (
    <Grid style={{ background: 'pink',  overflow: 'hidden' }}>
      <Grid
        className="App"
        style={{
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adjust the shadow values as needed
          height: '100%',
          width: '50%',
          margin: 'auto',
          marginTop: '100px',
          marginBottom: '50px',
        }}
      >
        
        <Typography variant="h4" style={{ textAlign: 'center',marginBottom:"20px" }}>Todo List</Typography>

     
        <img
          alt="photo"
          src="https://images.freeimages.com/images/large-previews/f7d/book-1179516.jpg?fmt=webp&w=500"
          style={{
            height: '150px',
            width: '150px',
            margin: '10px',
            display: 'block',  
            marginLeft: 'auto', 
            marginRight: 'auto', 
            marginTop: 'auto', 
            marginBottom: 'auto',
          }}
        />

        <Grid container justifyContent="center" alignItems="center" >
          <TextField
            label="Add a new item"
            variant="outlined"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            style={{ marginBottom: '5px', width: '300px', 
            }}
          />
        
          <Button variant="contained" onClick={addTask} style={{ marginTop: '20px', height: '58px', background: 'black', marginBottom: '20px' }}>
            Add Task
          </Button>
        </Grid>
        <Show_add_data data={item} delete_handler={deleteItem} edit_handler={editData} selectedOption={selectedOption}   toggleCompleted={toggleCompleted} />
        <Grid container justifyContent="center" alignItems="center">
          <FilterStatus data={item} all_select_item={allSelect} each_select_item={allSelect} />
    </Grid>

        
        
    </Grid>
   
  </Grid>
  
  );
};

export default App;
  