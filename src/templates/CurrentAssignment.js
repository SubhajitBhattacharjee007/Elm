import React from "react";
import "../componentStyling/ClosedItemTemplate.css";
import { FcApproval } from "react-icons/fc";

//https://react-icons.github.io/react-icons/    react-icons used from this library

function CurrentAssigmentTemplate() {
  return (
    <div className="CurrentAssigmentTemplate">
      <h2>Current there is no active Elms.</h2>
      <div class="grid-container">
        <div class="grid-item-OpenTemplate">
          1<FcApproval />
        </div>
        <div class="grid-item-OpenTemplate">2</div>
        <div class="grid-item-OpenTemplate">3</div>
        <div class="grid-item-OpenTemplate">4</div>
        <div class="grid-item-OpenTemplate">5</div>
        <div class="grid-item-OpenTemplate">6</div>
        <div class="grid-item-OpenTemplate">7</div>
        <div class="grid-item-OpenTemplate">8</div>
        <div class="grid-item-OpenTemplate">6</div>
        <div class="grid-item-OpenTemplate">7</div>
        <div class="grid-item-OpenTemplate">8</div>
      </div>
    </div>
  );
}

export default CurrentAssigmentTemplate;
