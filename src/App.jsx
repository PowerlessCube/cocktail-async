import './App.css';
import React from 'react';
import Search from './components/Search';
import SearchDisplay from './components/SearchDisplay';

const App = () => {
  return (
    <div className="App">
      <Search />
      <SearchDisplay />
    </div>
  );
};

export default App;
