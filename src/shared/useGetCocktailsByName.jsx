import React from 'react';
import { ACTIONS, Urls } from './constants';
import { useCocktailSearchContext } from '../shared/CocktailSearchProvider';

const handleErrors = res => {
  if (!res.ok) throw Error(res.statusText);
  return res;
};

const mapCocktails = drinks => {
  if (drinks === null) return [];
  return drinks.reduce((curr, drink) => {
    const mappedDrink = {
      id: drink.idDrink,
      name: drink.strDrink,
      thumbNail: drink.strDrinkThumb,
      category: drink.strCategory,
      glass: drink.strGlass,
      instructions: drink.strInstructions,
      ingriedients: Object.keys(drink).reduce((ingriedient, key) => {
        if (
          (key.includes('Ingredient') && drink[key] !== null) ||
          (key.includes('Measure') && drink[key] !== null)
        ) {
          ingriedient[key] = drink[key];
        }
        return ingriedient;
      }, {}),
    };

    curr.push(mappedDrink);

    return curr;
  }, []);
};

const useGetCocktailsByName = (cocktailSearch = null) => {
  const { dispatch } = useCocktailSearchContext();

  React.useEffect(() => {
    fetch(Urls(cocktailSearch).COCKTAIL_SEARCH_LINK)
      .then(handleErrors)
      .then(res => res.json())
      .then(({ drinks }) => {
        dispatch({
          type: ACTIONS.UPDATE_COCKTAILS,
          payload: mapCocktails(drinks),
        });
      })
      .catch(err => {
        dispatch({
          type: ACTIONS.UPDATE_ERROR,
          payload: err,
        });
      });
  }, [cocktailSearch, dispatch]);
};

export { useGetCocktailsByName };
