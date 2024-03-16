import React from "react";
import DashboardTemplate from "./DashboardTemplate";

function Template(props) {
  var element;
  switch (props.template) {
    case "Dashboard":
      element = (
        <div className="right-panel">
          <DashboardTemplate />
        </div>
      );
      break;
    default:
      element = <div className="right-panel">Welcome to Elm.</div>;
  }
  return element;
}

export default Template;
