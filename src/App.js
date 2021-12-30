import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react";

export default function App(){

  // create an array in the state
  const [lst, setLst] = useState([{
    id: 1,
    text: 'Doctors Appoinment',
    day: '5 feb',
    reminder: true
  },
  {
      id: 2,
      text: 'Meet up with friends',
      day: '6 feb',
      reminder: true
  },
  {
      id: 3,
      text: 'Go to hospital',
      day: '7 feb',
      reminder: false
  }]);

  const deleteTask = (id) => {
    // console.log('delete invoked', id);
    setLst(lst.filter((item) => item.id !== id));
  }

  const toggleReminder = (id) => {
    // console.log(id);
    setLst(lst.map((item) => item.id === id ? {...item, reminder: !item.reminder} : item))
  }
  
  const addTask = (task) => {
    console.log({ task });
    setLst([...lst, task]);
  }
  return (
    <div className="App">
      <Header title = "Example title" name = "Example Name"/>
      <AddTask onSave={addTask}/>
      {/* <Button  text = "Add" color= "green" onClick={handleClick}/> */}
      {lst.length > 0 ? (<Tasks tasks = {lst} onDelete= {deleteTask} onToggle= {toggleReminder} />) : <p> No tasks available</p>}
    </div>
  );
}


