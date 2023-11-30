import React, { useState, useEffect } from "react";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { ShowTask } from "./components/ShowTask";

export default function App() {

 const [tasksList, setTasksList] = useState(JSON.parse(localStorage.getItem("taskmate-list")) || []);
 const [task, setTask] = useState({});

 useEffect(() => {
  localStorage.setItem("taskmate-list", JSON.stringify(tasksList));
 }, [tasksList]);

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