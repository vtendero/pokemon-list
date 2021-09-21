import React from "react";
import Pokemon from './Pokemon';
import '../styles/pokeList.scss';

class PokeList extends React.Component {
  render() {
    const pokemon= this.props.pokemones.map(pokemon => {
      return (
        <li key= {pokemon.id} className= 'pokemonList__item'>
          <Pokemon pokemonProp= {pokemon} />
        </li>
      );
    });
    return (
      <main className='main'>
        <ul className= 'pokemonList'>
          {pokemon}
        </ul>
      </main>
    );
  }
}

export default PokeList;