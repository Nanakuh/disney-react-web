import PropTypes from 'prop-types';

function SearchByCity({ handleFilter }) {

  const handleInputCity = (event) => {
    handleFilter('city', event.currentTarget.value);
  };

  return (
    <label className="filter__label" htmlFor="character">
      Buscar por ciudad
      <select className="filter__select" onInput={handleInputCity}>
        <option value="all">Todos</option>
        <option value="Madrid">Madrid</option>
        <option value="Cuenca">Cuenca</option>
        <option value="Segovia">Segovia</option>
        <option value="Cadiz">Cadiz</option>
      </select>
    </label>
  );
}

SearchByCity.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default SearchByCity;
