import { useState, useEffect } from "react";

import EventCard from "../molecules/event-card/event-card";

import Form from "../molecules/Form";
import Search from "../molecules/Search";
import mockData from "../../data/data";
import Layout from "../../layout";

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
      <Search />
      <div className="every-card">
        {events.map((elem) => (
          <EventCard
            imageUrl={elem.imageUrl}
            name={elem.eventName}
            key={elem.id}
            price={elem.priceCents}
          />
        ))}
      </div>

      <Form />
    </Layout>
  );
};

export default Root;
