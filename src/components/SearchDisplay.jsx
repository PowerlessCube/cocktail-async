import { useCocktailSearchContext } from '../shared/CocktailSearchProvider';
import { useFetchCocktailsByName } from '../shared/useFetchCocktailsByName';

const SearchDisplay = () => {
  useFetchCocktailsByName();

  const {
    state: { cocktails, error },
  } = useCocktailSearchContext();

  return (
    <header className="App-header">
      <strong>Drinks List:</strong>
      {error ? (
        `Oh Dear: ${error}`
      ) : (
        <ul>
          {cocktails.map(({ id, glass, name }) => {
            return (
              <li key={id}>
                <strong>{name}</strong> <span>{glass}</span>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
};

export default SearchDisplay;
