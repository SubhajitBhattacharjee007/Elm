import React from "react";

function LeftPanel(props) {
  return (
    <div className="left-panel">
      <div
        className="sub-left-panel-1"
        onClick={() => {
          props.setTemplate("Dashboard");
        }}
      >
        Dashboard
      </div>
      <div
        className="sub-left-panel"
        onClick={() => {
          props.setTemplate("CurrentAssigmentTemplate");
        }}
      >
        Current Assignments
      </div>
      <div
        className="sub-left-panel"
        onClick={() => {
          props.setTemplate("Backlog");
        }}
      >
        Backlog
      </div>
      <div
        className="sub-left-panel"
        onClick={() => {
          props.setTemplate("ClosedItems");
        }}
      >
        Close Items
      </div>
    </div>
  );
}

export default LeftPanel;
