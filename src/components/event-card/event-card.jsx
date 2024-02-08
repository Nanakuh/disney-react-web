import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const EventCard = ({ imageUrl, name, id, price }) => {
  return (
    <NavLink to={`/detail/${name}`}>
      <div key={id} className="card-container">

        <img
          src={imageUrl || "https://placehold.co/200x150"}
          alt={name}
          className="card-image"
        />
        <h3 className="card-title">{name}</h3>
        <h3 className="card-title"> {price/100} €</h3>
      </div>
    </NavLink>
  );
};

EventCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default EventCard;
