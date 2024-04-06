import React from "react";
import { FcApproval } from "react-icons/fc";
import { SlClose } from "react-icons/sl";
import "../componentStyling/ClosedItemTemplate.css";
import { IoIosResize, IoMdCreate } from "react-icons/io";

function OpenItems(props) {
  const ticket = props.ticket;
  return (
    <>
      <div class="grid-item-OpenTemplate">
        <div class="TicketHeader">
          <div class="TicketHeader-openTicket-flex1">
            {ticket.status === "Closed" ? <SlClose /> : <FcApproval />}
          </div>
          <div class="TicketHeader-openTicket-flex2">{ticket.id}</div>
          <div class="TicketHeader-openTicket-flex3">{ticket.status}</div>
          <div class="TicketHeader-openTicket-flex4">{ticket.priority}</div>
          <div class="TicketHeader-openTicket-flex5">
            <IoIosResize />
          </div>
        </div>
        <div class="TicketBody">{ticket.description}</div>
      </div>
    </>
  );
}

export default OpenItems;
