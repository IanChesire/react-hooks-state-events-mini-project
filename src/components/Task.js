import React from "react";

function Task({tasks, categories, onDelete}) {
  
  function handleDelete() {
    onDelete(tasks.id)  
  }
  return (
    <div className="task">
      <div className="label" >{categories.category}</div>
      <div className="text" >{tasks.text}</div>
      <button className="delete"onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
