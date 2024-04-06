import React from "react";
import { useState, useEffect } from "react";
import "../componentStyling/ClosedItemTemplate.css";
import { SlClose } from "react-icons/sl";
import OpenItems from "./OpenItems";

function ClosedItemTemplate() {
  const getAllOpenedTicketsURL = "http://localhost:8080/getAllClosedTickets";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(getAllOpenedTicketsURL)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  const element1 = (
    <div className="CurrentAssigmentTemplate">
      <h2>List of open tasks.</h2>
      <div class="grid-container">
        {data != null
          ? data.map((ticket) => <OpenItems ticket={ticket} />)
          : null}
      </div>
    </div>
  );

  const element2 = <p>Data...</p>;
  return <>{loading ? element2 : element1}</>;
}

export default ClosedItemTemplate;
