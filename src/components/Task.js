import React, { useState } from "react";
import axios from "axios";

function Task(props) {
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
      props.setTicketNumber("1");
      const response = await axios.post("http://localhost:8080/xyz", formData);
      console.log("Post created:", response.data);
      props.setSubmitted(true);
      props.setTicketNumber(response.data);
    } catch (error) {
      props.setTicketNumber("999");
      props.setSubmittedResp(error.stack);
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="TaskContainer">
      <div className="Task">
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
          <input
            type="text"
            name="summary"
            placeholder="Open"
            value={(formData.status = "Open")}
            onChange={handleChange}
            readOnly
          ></input>

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
            value={
              formData.priority == null
                ? (formData.priority = "Low")
                : formData.priority
            }
            onChange={handleChange}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Issue description..."
          ></textarea>

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
