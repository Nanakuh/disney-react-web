import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./event-card.css";

const EventCard = ({ imageUrl, name, id, price }) => {
  return (
    <div className="card-container" id={id}>
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-content">
        <div className="title-container">
        <h4 className="card-title">{name}</h4>
        </div>
        <div className="bottom-content">
          <div className="price-info">
            <span>Desde</span>
            <span className="price">{price / 100} €</span>
          </div>
          <NavLink to={`/detail/${name}`}>
            <button className="info-button">+INFO</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default EventCard;
