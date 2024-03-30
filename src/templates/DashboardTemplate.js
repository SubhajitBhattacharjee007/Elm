/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Task from "../components/Task";
import "../componentStyling/task.css";

function DashboardTemplate() {
  const [open, setOpen] = useState(false);

  console.log(open);
  return (
    <div className="DashboardTemplate">
      {!open && <h2>Dashboard is empty.</h2>}
      {!open && <a onClick={() => setOpen(true)}>+ Create some tasks.</a>}
      {open && <Task />}
    </div>
  );
}

export default DashboardTemplate;
