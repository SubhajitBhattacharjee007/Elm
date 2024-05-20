import React from "react";
import { useState, useEffect } from "react";
import "../componentStyling/ClosedItemTemplate.css";
import OpenItems from "./OpenItems";
import TicketDetails from "../components/TicketDetails";
import { NotificationContainer } from "react-notifications";
import { TbFilterSearch } from "react-icons/tb";
import { SlMagnifier } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
import { SlMenu } from "react-icons/sl";

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
      <div className="A">
      <NotificationContainer />
      <div className="filter-navbar">
        <div className="filter-navbar-div"><TbFilterSearch/></div>
        <div className="filter-navbar-div"><SlMenu/></div>
        <div className="filter-navbar-div"><SlCalender/></div>
        <div className="filter-navbar-div-search">
          <SlMagnifier/></div>
      </div>
      </div>
      <div className="B">
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
