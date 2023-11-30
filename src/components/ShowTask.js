import React from "react";

export const ShowTask = ({tasksList, setTasksList, task, setTask}) => {

  const handleEditTask = (id) => {
    const selectedTask = tasksList.find((element) => element.id === id);
    setTask(selectedTask)
  };

  const handleDeleteTask = (id) => {
    const newTasksList = tasksList.filter((element) => element.id !== id);
    setTasksList(newTasksList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">&Agrave; faire</span>
          <span className="count">{tasksList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasksList([])}>Tout supprimer</button>
      </div>
      <ul>
        {
          tasksList.map((task) => (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              <i className="bi bi-pencil" onClick={() => handleEditTask(task.id)}></i>
              <i className="bi bi-trash" onClick={() => handleDeleteTask(task.id)}></i>
            </li>
          ))
        }
        
      </ul>
    </section>
  )
}
