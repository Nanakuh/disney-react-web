import { useState, useEffect } from "react";
import "./root.css";
import EventCard from "../../molecules/event-card/event-card";
import mockData from "../../../data/data";
import Layout from "../../../layout";

const Root = () => {
  const [events, setEvents] = useState([]);

  const fetchData = () => {
    //simulamos peticion a api

    setEvents(mockData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="cards-container">
        {events.map((elem) => (
          <EventCard
            imageUrl={elem.imageUrl}
            name={elem.eventName}
            key={elem.id}
            price={elem.priceCents}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Root;
