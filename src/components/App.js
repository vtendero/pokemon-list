import React from 'react';
import Header from './Header'
import pokemones from '../data/data.json';
import PokemonList from './PokemonList';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <PokemonList data= {pokemones} />
      </>
    );
  }
}


export default App;