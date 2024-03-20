import React, { useState } from "react";

function LeftPanel(props) {
  const bgColorOnSelect = "#090";

  const [dashboardColor, setDashboardColour] = useState();
  const [currentAssgmntColor, setCurrentAssgmntColor] = useState();
  const [backlogColor, setBacklogColour] = useState();
  const [closedItemColor, setClosedItemColour] = useState();

  return (
    <div className="left-panel">
      <div
        className="sub-left-panel-1"
        onClick={() => {
          props.setTemplate("Dashboard");
          setDashboardColour(bgColorOnSelect);
          resetOthers("Dashboard");
        }}
        style={{ backgroundColor: dashboardColor }}
      >
        Dashboard
      </div>
      <div
        className="sub-left-panel"
        onClick={() => {
          props.setTemplate("CurrentAssigmentTemplate");
          setCurrentAssgmntColor(bgColorOnSelect);
          resetOthers("CurrentAssigmentTemplate");
        }}
        style={{ backgroundColor: currentAssgmntColor }}
      >
        Current Assignments
      </div>
      <div
        className="sub-left-panel"
        onClick={() => {
          props.setTemplate("Backlog");
          setBacklogColour(bgColorOnSelect);
          resetOthers("Backlog");
        }}
        style={{ backgroundColor: backlogColor }}
      >
        Backlog
      </div>
      <div
        className="sub-left-panel"
        onClick={() => {
          props.setTemplate("ClosedItems");
          setClosedItemColour(bgColorOnSelect);
          resetOthers("ClosedItems");
        }}
        style={{ backgroundColor: closedItemColor }}
      >
        Close Items
      </div>
    </div>
  );

  function resetOthers(template) {
    switch (template) {
      case "Dashboard":
        setCurrentAssgmntColor();
        setBacklogColour();
        setClosedItemColour();
        break;
      case "CurrentAssigmentTemplate":
        setDashboardColour();
        setBacklogColour();
        setClosedItemColour();
        break;
      case "Backlog":
        setCurrentAssgmntColor();
        setDashboardColour();
        setClosedItemColour();
        break;
      case "ClosedItems":
        setCurrentAssgmntColor();
        setBacklogColour();
        setDashboardColour();
        break;
      default:
    }
  }
}

export default LeftPanel;
