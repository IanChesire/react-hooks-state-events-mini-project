import React from "react";
import { useState } from "react"; 

function CategoryFilter({ categories, onCategorySelect}) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCategoryClick (category) {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index, tasks) => (
        <button key={index} 
        className={selectedCategory === category ? "selected" : ""}
        onClick={() => handleCategoryClick(category)} >{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
