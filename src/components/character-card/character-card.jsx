import PropTypes from 'prop-types';

const CharacterCard = ({ imagen, titulo }) => {
  return (
    <div className="card-container">
      <img src={imagen || 'https://placehold.co/200x150'} alt={titulo} className="card-image" />
      <h3 className="card-title">{titulo}</h3>
    </div>
  );
};

CharacterCard.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired
};

export default CharacterCard;