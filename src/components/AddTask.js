import React from "react";
import { useState } from "react";

export const AddTask = ({tasksList, setTasksList}) => {

  const [counter, setCounter] = useState(0);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: event.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTasksList([...tasksList, newTask]);
    event.target.task.value = "";
    setCounter(0);
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    setCounter(event.target.value.length);
  }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="task">Libellé de la tâche</label>
              <input type="text" name="task" id="task" autoComplete="off" maxLength="50" onChange={handleOnChange} />
              <span><b>{counter}</b>/50 caractères</span>
            </div>
            <button type="submit">Ajouter</button>
        </form>
    </section>
  )
}
