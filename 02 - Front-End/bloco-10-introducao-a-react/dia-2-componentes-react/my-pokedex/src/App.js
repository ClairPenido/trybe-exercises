import React from 'react';
import Pokedex from './Pokedex';
import './App.css';
import pokemons from './data';

function App() {
  return ( // Onde irá mostrar os pokemons
    <div className="App">
     <h1>Pokedex</h1>
     <Pokedex pokemons = {pokemons} />
    </div>
  );
}

export default App;
