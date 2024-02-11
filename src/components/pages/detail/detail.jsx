import { useParams, NavLink } from "react-router-dom";
import Layout from "../../../layout";
import "./detail.css";
import { useEffect, useState } from "react";
import mockData from "../../../data/data";


const Detail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  const getEventById = (eventId) => {
    const result = mockData.find((elem) => elem.id === eventId);

    return result;
  };

  useEffect(() => {
    const response = getEventById(eventId);

    setEvent(response);
  }, [eventId]);

  if (!event) {
    return <div>Cargando</div>;
  }

  const formatEventDate = (eventDate) => {
    
    const date = new Date(eventDate);
    return `${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
    
  }


  return (
    <Layout>
      <div className="event-detail">
      
        <div className="event-info">
          <h1 className="event-name">{event.eventName}</h1>
          <p className="event-date">Fecha: {formatEventDate(event.date)}</p>
          <p className="event-location">{`${event.location.name}, ${event.location.address}, ${event.location.city}, ${event.location.country}`}</p>
          <p className="event-description">{event.description}</p>
          <div className="event-booking-info">
            <span className="event-price">{event.priceCent}</span>
            <span className="event-availability">{`Entradas disponibles: ${event.availability}`}</span>
          </div>
          <div className="event-organizer">
            <p>Organizador: {event.organizer.name}</p>
            <p>Contacto: {event.organizer.contact}</p>
          </div>
          <NavLink to={`/form`}>
          <button className="event-booking-button">Reservar Entrada</button>
          </NavLink>
          
        </div>
      </div>
    </Layout>
  );
};
export default Detail;
