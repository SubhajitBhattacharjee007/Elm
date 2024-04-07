import React, { useState } from "react";
import {
  BiSolidGrid,
  BiGridAlt,
  BiBookOpen,
  BiXCircle,
  BiTask
} from "react-icons/bi";

function LeftPanel(props) {
  const bgColorOnSelect = "#e6e6e6";

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
        <div className="sub-left-panel-1-1">
          <BiSolidGrid />
        </div>
        <div className="sub-left-panel-1-2">Dashboard</div>
      </div>
      <div
        className="sub-left-panel-1"
        onClick={() => {
          props.setTemplate("CurrentAssigmentTemplate");
          setCurrentAssgmntColor(bgColorOnSelect);
          resetOthers("CurrentAssigmentTemplate");
        }}
        style={{ backgroundColor: currentAssgmntColor }}
      >
        <div className="sub-left-panel-1-1">
          <BiBookOpen />
        </div>
        <div className="sub-left-panel-1-2">Open Items</div>
      </div>
      <div
        className="sub-left-panel-1"
        onClick={() => {
          props.setTemplate("ClosedItems");
          setClosedItemColour(bgColorOnSelect);
          resetOthers("ClosedItems");
        }}
        style={{ backgroundColor: closedItemColor }}
      >
        <div className="sub-left-panel-1-1">
          <BiXCircle />
        </div>
        <div className="sub-left-panel-1-2">Closed Items</div>
      </div>
      <div
        className="sub-left-panel-1"
        onClick={() => {
          props.setTemplate("Backlog");
          setBacklogColour(bgColorOnSelect);
          resetOthers("Backlog");
        }}
        style={{ backgroundColor: backlogColor }}
      >
        <div className="sub-left-panel-1-1">
          <BiTask />
        </div>
        <div className="sub-left-panel-1-2">Backlog</div>
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
