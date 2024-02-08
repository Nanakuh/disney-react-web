import { useState, useEffect } from "react";

import EventCard from "../components/event-card/event-card";
import Header from "../components/Header";
import Form from "../components/Form";
import Search from "../components/Search";
import mockData from "../data/data";

function Root() {
  const [events, setEvents] = useState([]);

  const fetchData = () => { //simulamos peticion a api
   
      setEvents(mockData);
  
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Search />
      <div className="every-card">
        {events.map((elem) => (
          <EventCard
            imagenUrl={elem.imageUrl}
            name={elem.eventName}
            key={elem.id}
            price={elem.priceCents}
          />
        ))}
      </div>

      <Form />
    </div>
  );
}

export default Root;
