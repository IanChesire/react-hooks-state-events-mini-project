import React from "react";

function NewTaskForm({categories}) {

  function submitForm(e) {
    
    e.preventDefault();

  }
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {/* {categories.filter((categories, index))} */}
        </select>
      </label>
      <input type="submit" value="Add task" onSubmit={submitForm} />
    </form>
  );
}

export default NewTaskForm;
