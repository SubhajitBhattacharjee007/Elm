import React, { useState } from "react";
import {
  BiSolidGrid,
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
        className="sub-left-panel"
        onClick={() => {
          props.setTemplate("Dashboard");
          setDashboardColour(bgColorOnSelect);
          resetOthers("Dashboard");
        }}
        style={{ backgroundColor: dashboardColor, borderRadius: '10px' }}
      >
        <div className="sub-left-panel-div1">
          <BiSolidGrid />
        </div>
        <div className="sub-left-panel-div2">Dashboard</div>
      </div>
      <div
        className="sub-left-panel"
        onClick={() => {
          props.setTemplate("CurrentAssigmentTemplate");
          setCurrentAssgmntColor(bgColorOnSelect);
          resetOthers("CurrentAssigmentTemplate");
        }}
        style={{ backgroundColor: currentAssgmntColor, borderRadius: '10px' }}
      >
        <div className="sub-left-panel-div1">
          <BiBookOpen />
        </div>
        <div className="sub-left-panel-div2">Open Items</div>
      </div>
      <div
        className="sub-left-panel"
        onClick={() => {
          props.setTemplate("ClosedItems");
          setClosedItemColour(bgColorOnSelect);
          resetOthers("ClosedItems");
        }}
        style={{ backgroundColor: closedItemColor, borderRadius: '10px' }}
      >
        <div className="sub-left-panel-div1">
          <BiXCircle />
        </div>
        <div className="sub-left-panel-div2">Closed Items</div>
      </div>
      <div
        className="sub-left-panel"
        onClick={() => {
          props.setTemplate("Backlog");
          setBacklogColour(bgColorOnSelect);
          resetOthers("Backlog");
        }}
        style={{ backgroundColor: backlogColor, borderRadius: '10px' }}
      >
        <div className="sub-left-panel-div1">
          <BiTask />
        </div>
        <div className="sub-left-panel-div2">Backlog</div>
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
