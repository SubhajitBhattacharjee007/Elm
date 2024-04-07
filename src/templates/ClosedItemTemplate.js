import React from "react";
import { useState, useEffect } from "react";
import "../componentStyling/ClosedItemTemplate.css";
import OpenItems from "./OpenItems";
import TicketDetails from "../components/TicketDetails";

function ClosedItemTemplate() {

  const getAllClosedTicketsURL = "http://localhost:8080/getAllClosedTickets";
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [dataLoadingView, setDataLoadingView] = useState(<div>Loading...</div>);
  const [selectedTicket, setSelectedTicket] = useState();
  const [openSelectedTicket, setOpenSelectedTicket] = useState(false);

  const exceptionNotification = (
    <div>
      <p>
        Possibly the backend service is down, got exception while API calling [{" "}
        {getAllClosedTicketsURL} ] You need to have the below service running:
      </p>
      <a href="https://github.com/SubhajitBhattacharjee007/elm-control-service">
        elm-control-service
      </a>
    </div>
  );

  useEffect(() => {
    fetch(getAllClosedTicketsURL)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setDataLoadingView(exceptionNotification);
      });
  }, []);

  const element1 = (
    <div className="CurrentAssigmentTemplate">
      <h2>List of open tasks.</h2>
      <div class="grid-container">
        {data != null
          ? data.map((ticket) => (
              <OpenItems
                ticket={ticket}
                setOpenSelectedTicket={setOpenSelectedTicket}
                setSelectedTicket={setSelectedTicket}
              />
            ))
          : null}
      </div>
    </div>
  );

  const view = <>{loading ? dataLoadingView : element1}</>;

  return (
    <>
      {openSelectedTicket ? (
        <TicketDetails selectedTicket={selectedTicket} />
      ) : (
        view
      )}
    </>
  );
}

export default ClosedItemTemplate;
