import React from "react";
import { useState, useEffect } from "react";
import "../componentStyling/ClosedItemTemplate.css";
import OpenItems from "./OpenItems";
import TicketDetails from "../components/TicketDetails";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

//https://react-icons.github.io/react-icons/    react-icons used from this library

function CurrentAssigmentTemplate() {
  const getAllOpenedTicketsURL = "http://localhost:8080/getAllTickets";

  const [loading, setLoading] = useState(true);
  const [element2, setElement2] = useState(<div>Loading...</div>);
  const [openSelectedTicket, setOpenSelectedTicket] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState();
  const [data, setData] = useState();

  let elem = (
    <div>
      <p>
        Possibly the backend service is down, got exception while API calling of
        {getAllOpenedTicketsURL} You need to have the below service running:
      </p>
      <a href="https://github.com/SubhajitBhattacharjee007/elm-control-service">
        elm-control-service
      </a>
    </div>
  );

  useEffect(() => {
    fetch(getAllOpenedTicketsURL)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        console.log("Swallowed!");
        setElement2(elem);
      });
  }, []);

  const element1 = (
    <div className="CurrentAssigmentTemplate">
      <NotificationContainer />
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

  const view = <>{loading ? element2 : element1}</>;

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

export default CurrentAssigmentTemplate;
