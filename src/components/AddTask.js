import React from "react";
import { useState } from "react";

export const AddTask = ({tasksList, setTasksList, task, setTask}) => {
  const maxCharacters = 50;
  const [counter, setCounter] = useState(0);
  
  const handleAddOrUpdate = (event) => {
    const date = new Date();
    event.preventDefault();
    if (task.id) {
        const tasksListUpdated = tasksList.map((element) => 
          element.id === task.id ? {id: task.id, name: event.target.task.value, date:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : element 
        );
        setTasksList(tasksListUpdated);
    } else {
      const newTask = {
        id: date.getTime(),
        name: event.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasksList([...tasksList, newTask]);
    }
    setCounter(0);
    setTask({})
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    setCounter(event.target.value.length);
    setTask({...task, name: event.target.value});
  }

  return (
    <section className="addTask">
        <form onSubmit={handleAddOrUpdate}>
            <div>
              <label htmlFor="task">Libellé de la tâche</label>
              <input type="text" name="task" id="task" value={task.name || ""} autoComplete="off" maxLength={maxCharacters} onChange={handleOnChange} />
              <span><b>{counter}</b>/{maxCharacters} caractères</span>
            </div>
            <button type="submit">{ task.id ? `Modifier` : `Ajouter`}</button>
        </form>
    </section>
  )
}
