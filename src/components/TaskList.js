import React from "react";
import Task from "./Task";
import { useState } from "react";

function TaskList({ tasks, categories }) {

  const [currentTasks, setCurrentTasks] = useState("All");
  const handleChange = (e) => {
    setCurrentTasks(e.target.value);
  };

  const updatedTasks = tasks.filter((task) => {
    if (currentTasks === "All") return true ; 
    return task.category === updatedTasks
  } );

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task onChange={handleChange}
          key={index}
          tasks={task}
          categories={categories}
        />
      ))}
    </div>
  );
}

export default TaskList;
