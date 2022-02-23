export const ACTIONS = {
  SUBMIT_SEARCH: 'SUBMIT_SEARCH',
  UPDATE_COCKTAILS: 'UPDATE_COCKTAILS',
  UPDATE_ERROR: 'UPDATE_ERROR',
};

export const Urls = text => ({
  COCKTAIL_SEARCH_LINK: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`,
});
