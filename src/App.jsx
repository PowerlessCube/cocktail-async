import './App.css';
import React from 'react';
import Search from './components/Search';
import SearchDisplay from './components/SearchDisplay';
import { CocktailSearchProvider } from './shared/CocktailSearchProvider';

const App = () => {
  return (
    <CocktailSearchProvider>
      <div className="App">
        <Search />
        <SearchDisplay />
      </div>
    </CocktailSearchProvider>
  );
};

export default App;
