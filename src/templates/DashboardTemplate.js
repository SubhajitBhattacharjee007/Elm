/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Task from "../components/Task";
import "../componentStyling/task.css";
import {
  NotificationManager,
  NotificationContainer
} from "react-notifications";
import "react-notifications/lib/notifications.css";

function DashboardTemplate() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState();

  console.log("Open: ", open);
  console.log("Status: ", submitted);
  console.log("TicketNumber: ", ticketNumber);
  return (
    <div className="DashboardTemplate">
      <NotificationContainer />
      {!open && <h2>Dashboard is empty.</h2>}
      {!open && <a onClick={() => setOpen(true)}>+ Create some tasks.</a>}
      {!submitted && open && (
        <Task setSubmitted={setSubmitted} setTicketNumber={setTicketNumber} />
      )}
      {open &&
        submitted &&
        NotificationManager.success(
          "Ticket has been submitted. TicketNumber: " + ticketNumber,
          "Successful!"
        )}
    </div>
  );
}

export default DashboardTemplate;
