import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [filteredTasks, setFilteredTasks] = useState(TASKS)

  function handleCategorySelect (selectedCategory) {
    if (selectedCategory === "All") {
      setFilteredTasks(TASKS);
    }
    else {
      const filtered = TASKS.filter (task => task.category === selectedCategory);
      setFilteredTasks(filtered);
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter tasks={TASKS} categories={CATEGORIES} onCategorySelect={handleCategorySelect}/>
      <NewTaskForm categories={CATEGORIES} />
      <TaskList tasks={filteredTasks} categories={CATEGORIES}/>
    </div>
  );
}

export default App;
