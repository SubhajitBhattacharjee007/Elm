import React from "react";
import { FcApproval } from "react-icons/fc";
import "../componentStyling/ClosedItemTemplate.css";

function OpenItems(props) {
  const ticket = props.ticket;
  return (
    <>
      <div class="grid-item-OpenTemplate">
        <div class="TicketHeader">
          <div class="TicketHeader-openTicket-flex1">
            <FcApproval />
          </div>
          <div class="TicketHeader-openTicket-flex2">{ticket.id}</div>
          <div class="TicketHeader-openTicket-flex3">{ticket.status}</div>
        </div>
        <div class="TicketBody">{ticket.description}</div>
      </div>
    </>
  );
}

export default OpenItems;
