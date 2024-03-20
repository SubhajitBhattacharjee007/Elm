import React from "react";
import DashboardTemplate from "./DashboardTemplate";
import BacklogTemplate from "./BacklogTemplate";
import ClosedItemTemplate from "./ClosedItemTemplate";
import CurrentAssigmentTemplate from "./CurrentAssignment";

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
    case "Backlog":
      element = (
        <div className="right-panel">
          <BacklogTemplate />
        </div>
      );
      break;
    case "ClosedItems":
      element = (
        <div className="right-panel">
          <ClosedItemTemplate />
        </div>
      );
      break;
    case "CurrentAssigmentTemplate":
      element = (
        <div className="right-panel">
          <CurrentAssigmentTemplate />
        </div>
      );
      break;
    default:
      element = <div className="right-panel">Welcome to Elm.</div>;
  }
  return element;
}

export default Template;
