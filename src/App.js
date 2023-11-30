import React from "react";
import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { ShowTask } from "./components/ShowTask";

export default function App() {

 const [tasksList, setTasksList] = useState([]);
 const [task, setTask] = useState({});

  return (
    <div className='App container'>
      <Header />
      <AddTask 
        tasksList = {tasksList} 
        setTasksList = {setTasksList} 
        task = {task}
        setTask = {setTask}
      />
      <ShowTask  
        tasksList = {tasksList} 
        setTasksList = {setTasksList} 
        task = {task}
        setTask = {setTask}
      />
    </div>
  )
}