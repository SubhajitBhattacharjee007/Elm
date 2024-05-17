import React from "react";
import { SlClose } from "react-icons/sl";
import "../componentStyling/ClosedItemTemplate.css";
import { SlSizeFullscreen } from "react-icons/sl";
import { FcOk } from "react-icons/fc";

function OpenItems(props) {
  const ticket = props.ticket;
  return (
    <>
      <div class="grid-item-OpenTemplate">
        <div class="TicketHeader">
          <div class="TicketHeader-openTicket-flex1">
            {ticket.status === "Closed" ? <SlClose /> : <FcOk />}
          </div>
          <div class="TicketHeader-openTicket-flex2">{ticket.id}</div>
          <div class="TicketHeader-openTicket-flex3">{ticket.status}</div>
          <div class="TicketHeader-openTicket-flex4">{ticket.priority}</div>
          <div class="TicketHeader-openTicket-flex5">
            <SlSizeFullscreen
              onClick={() => {
                props.setOpenSelectedTicket(true);
                props.setSelectedTicket(ticket);
              }}
            />
          </div>
        </div>
        <div class="TicketBody">{ticket.description}</div>
      </div>
    </>
  );
}

export default OpenItems;
