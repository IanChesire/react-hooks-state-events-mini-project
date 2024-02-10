import React from "react";
import Task from "./Task";
import { useState } from "react";

function TaskList({ tasks, categories }) {


  const [currentTasks, setCurrentTasks] = useState("All");
  const handleChange = (e) => {
    setCurrentTasks(e.target.value);
  };


  const filteredTasks = tasks.filter((task) => {
    if (currentTasks === "All") return true;
    return task.category === currentTasks;
  });

  function clickToDelete () {
    setCurrentTasks("");
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredTasks.map((task, index) => (
        <Task onChange={handleChange}
          key={index}
          tasks={task}
          categories={categories}
          onDelete={clickToDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
