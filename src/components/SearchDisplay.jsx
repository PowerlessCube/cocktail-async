import { useCocktailSearchContext } from '../shared/CocktailSearchProvider';
import { useGetCocktailsByName } from '../shared/useGetCocktailsByName';

const SearchDisplay = () => {
  const {
    state: { cocktails, searchTerm, error },
  } = useCocktailSearchContext();

  useGetCocktailsByName(searchTerm);

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
