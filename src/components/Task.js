import React, { useState } from "react";
import axios from "axios";

function Task(props) {
  const tempvariable = "12345";

  const [formData, setFormData] = useState({
    projectName: "",
    issueType: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/xyz", formData);
      console.log("Post created:", response.data);
      props.setSubmitted(true);
      props.setTicketNumber(response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="TaskContainer">
      <div className="Task">
        <h2>Task: Elm_{tempvariable}</h2>

        <form onSubmit={handleSubmit}>
          <label for="projectName">Project Name</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          ></input>
          <label for="issueType">Issue Type</label>
          <input
            type="text"
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
          ></input>

          <label for="status">Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="beignProgress">Begin progress</option>
            <option value="issueDone">Issue done</option>
            <option value="closed">Closed</option>
            <option value="underReview">Under dev review</option>
          </select>

          <label for="lname">Acceptance Criteria</label>
          <input
            type="text"
            name="acceptanceCriteria"
            placeholder=""
            value={formData.acceptanceCriteria}
            onChange={handleChange}
          ></input>

          <label for="priority">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          >
            Issue description...
          </textarea>

          <label for="lname">Summary</label>
          <input
            type="text"
            name="summary"
            placeholder=""
            value={formData.summary}
            onChange={handleChange}
          ></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Task;
