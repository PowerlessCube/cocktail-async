import React from 'react';
import { ACTIONS } from './constants';

const cocktailsSearchReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SUBMIT_SEARCH:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case ACTIONS.UPDATE_COCKTAILS:
      return {
        ...state,
        cocktails: action.payload,
      };

    case ACTIONS.UPDATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  searchTerm: '',
  cocktails: [],
  error: '',
};

const CocktailSearchContext = React.createContext();

const useCocktailSearchContext = () => React.useContext(CocktailSearchContext);

const CocktailSearchProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    cocktailsSearchReducer,
    initialState
  );

  return (
    <CocktailSearchContext.Provider value={{ state, dispatch }}>
      {children}
    </CocktailSearchContext.Provider>
  );
};

export { CocktailSearchProvider, useCocktailSearchContext };
