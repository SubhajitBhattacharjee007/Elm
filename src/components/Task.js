import React from "react";

function Task() {
  const tempvariable = "12345";
  return (
    <div className="TaskContainer">
      <div className="Task">
        <h2>Task: Elm_{tempvariable}</h2>

        <form action="/action_page.php">
          <label for="fname">Project Name</label>
          <input
            type="text"
            id="fname"
            name="projectname"
            placeholder="Project name.."
          ></input>

          <label for="lname">Issue Type</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Issue Type"
          ></input>
          <label for="lname">Status</label>
          <input type="text" id="lname" name="lastname" placeholder=""></input>
          <label for="lname">Acceptance Criteria</label>
          <input type="text" id="lname" name="lastname" placeholder=""></input>
          <label for="country">Priority</label>
          <select id="country" name="country">
            <option value="australia">High</option>
            <option value="canada">Medium</option>
            <option value="usa">Low</option>
          </select>
          <label for="lname">Description</label>
          <input type="text" id="lname" name="lastname" placeholder=""></input>
          <label for="lname">Summary</label>
          <input type="text" id="lname" name="lastname" placeholder=""></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Task;
