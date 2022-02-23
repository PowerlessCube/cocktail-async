import React from 'react';
import { ACTIONS } from '../shared/constants';
import { useCocktailSearchContext } from '../shared/CocktailSearchProvider';

const Search = () => {
  const {
    dispatch,
    state: { searchTerm },
  } = useCocktailSearchContext();
  const [cocktailSearch, setCocktailSearch] = React.useState(searchTerm);

  const handleOnChange = e => {
    e.preventDefault();
    setCocktailSearch(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (!cocktailSearch) return;
    dispatch({
      type: ACTIONS.SUBMIT_SEARCH,
      payload: cocktailSearch,
    });
    setCocktailSearch('');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={cocktailSearch} onChange={handleOnChange} />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Search;
