import { React, useState } from "react";
import Task from "../components/Task";
import "../componentStyling/task.css";
import axios from "axios";
import {
  NotificationManager,
  NotificationContainer
} from "react-notifications";
import "react-notifications/lib/notifications.css";

function TicketDetails(props) {

  const ticket = props.selectedTicket;
  const [formSumitted, setFormSubmitted] = useState();
  const [formData, setFormData] = useState(props.selectedTicket);
  const [formSubmissionFailed, setFormSubmissionFailed] = useState(false);

  const handleChange = (e) => {
    setFormSubmitted(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      formData.id = ticket.id;
      const response = await axios.post(
        "http://localhost:8080/updateTicket",
        formData
      );
      setFormSubmitted(true);
    } catch (error) {
      setFormSubmissionFailed(true);
    }
  };
  
  return (
    <div className="DashboardTemplate">
      <NotificationContainer />
      <div className="TaskContainer">
        <div className="Task">
          <h2>{ticket.id}</h2>

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
            <select
              name="status"
              value={
                formData.status == null
                  ? (formData.status = "Re-Opened")
                  : formData.status
              }
              onChange={handleChange}
            >
              <option value="Re-Opened">Re-Opened</option>
              <option value="Issue done">Issue done</option>
              <option value="Closed">Closed</option>
              <option value="Under review">Under review</option>
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
        {formSumitted &&
          NotificationManager.success(
            "Updated ticket number is: " + ticket.id,
            "Ticket has been successfully updated!"
          )}
        {formSubmissionFailed &&
          NotificationManager.error(
            "Possible reasons backend service is unavailable",
            "Ticket updation failed!"
          )}
      </div>
    </div>
  );
}

export default TicketDetails;
