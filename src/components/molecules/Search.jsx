import PropTypes from 'prop-types';

import SearchByCity from "./SearchByCity";

function Search ({ handleFilter }) {
  return (
    <form className="filter">
    
      <SearchByCity handleFilter={handleFilter} />
    </form>
  );
}

Search.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default Search;
