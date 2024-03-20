import React from "react";
import "../componentStyling/ClosedItemTemplate.css";
import { FcCancel } from "react-icons/fc";

function ClosedItemTemplate() {
  return (
    <div className="ClosedItemTemplate">
      <h2>List of closed tasks.</h2>
      <div class="grid-container">
        <div class="grid-item-closedTemplate">
          1<FcCancel />
        </div>
        <div class="grid-item-closedTemplate">2</div>
        <div class="grid-item-closedTemplate">3</div>
        <div class="grid-item-closedTemplate">4</div>
        <div class="grid-item-closedTemplate">5</div>
        <div class="grid-item-closedTemplate">6</div>
        <div class="grid-item-closedTemplate">7</div>
        <div class="grid-item-closedTemplate">8</div>
        <div class="grid-item-closedTemplate">6</div>
        <div class="grid-item-closedTemplate">7</div>
        <div class="grid-item-closedTemplate">8</div>
      </div>
    </div>
  );
}

export default ClosedItemTemplate;
