import React from "react";

function CategoryFilter({categories}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.filter((categories, index) => (
        <li key={index}>{categories}</li>
      ))}
    </div>
  );
}

export default CategoryFilter;
