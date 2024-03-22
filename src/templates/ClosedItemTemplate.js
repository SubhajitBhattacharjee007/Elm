import React from "react";
import "../componentStyling/ClosedItemTemplate.css";
import { SlClose } from "react-icons/sl";

function ClosedItemTemplate() {
  return (
    <div className="ClosedItemTemplate">
      <h2>List of closed tasks.</h2>
      <div class="grid-container">
        <div class="grid-item-closedTemplate">
          <div class="TicketHeader">
            <div class="TicketHeader-closedTicket-flex1">
              <SlClose />
            </div>
            <div class="TicketHeader-closedTicket-flex2">Elm_1234</div>
            <div class="TicketHeader-closedTicket-flex3"> Closed</div>
          </div>
          <div class="TicketBody">
            This is bla bla bla bla blablablav blabla bla bla bla bla bla
            blablablablaThis is bla bla bla bla blablablav blabla bla bla bla
            bla bla blablablablaThis is bla bla bla bla blablablav blabla bla
            bla bla bla bla blablablabla This is bla bla bla bla blablablav
            blabla bla bla bla bla bla blablablablaThis is bla bla bla bla
            blablablav blabla bla bla bla bla bla blablablablaThis is bla bla
            bla bla blablablav blabla bla bla bla bla bla blablablabla This is
            bla bla bla bla blablablav blabla bla bla bla bla bla
            blablablablaThis is bla bla bla bla blablablav blabla bla bla bla
            bla bla blablablablaThis is bla bla bla bla blablablav blabla bla
            bla bla bla bla blablablabla This is bla bla bla bla blablablav
            blabla bla bla bla bla bla blablablablaThis is bla bla bla bla
            blablablav blabla bla bla bla bla bla blablablablaThis is bla bla
            bla bla blablablav blabla bla bla bla bla bla blablablabla
          </div>
        </div>
        <div class="grid-item-closedTemplate">
          <div class="TicketHeader">
            <div class="TicketHeader-closedTicket-flex1">
              <SlClose />
            </div>
            <div class="TicketHeader-closedTicket-flex2">Elm_1234</div>
            <div class="TicketHeader-closedTicket-flex3"> Closed</div>
          </div>
          <div class="TicketBody">
            This is bla bla bla bla blablablav blabla bla bla bla bla bla
            blablablablaThis is bla
          </div>
        </div>
        <div class="grid-item-closedTemplate">
          <div class="TicketHeader">
            <div class="TicketHeader-closedTicket-flex1">
              <SlClose />
            </div>
            <div class="TicketHeader-closedTicket-flex2">Elm_1234</div>
            <div class="TicketHeader-closedTicket-flex3"> Closed</div>
          </div>
          <div class="TicketBody">
            This is bla bla bla bla blablablav blabla bla bla bla bla bla
            blablablablaThis is bla
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClosedItemTemplate;
