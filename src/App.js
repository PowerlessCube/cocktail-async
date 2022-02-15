import './App.css';
import React from 'react';

const handleErrors = res => {
  if (!res.ok) throw Error(res.statusText);
  return res;
};

const mapCocktails = drinks => {
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

const App = () => {
  const [cocktail, setCocktail] = React.useState([]);
  React.useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=old')
      .then(handleErrors)
      .then(res => res.json())
      .then(res => setCocktail(mapCocktails(res.drinks)))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      {console.log({ cocktail })}
      <header className="App-header">{JSON.stringify(cocktail)}</header>
    </div>
  );
};

export default App;
