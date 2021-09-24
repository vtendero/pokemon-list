import React from "react";
import Pokemon from './Pokemon';
import '../styles/pokeList.scss';

const PokeList = (props) => {
  const pokemon= props.pokemons.map(pokemon => {
      return (
        <li key= {pokemon.id.toString()} className= 'pokemonList__item' id={pokemon.id}>
          <Pokemon 
            id={pokemon.id}
            name={pokemon.name}
            url={pokemon.url}
            types={pokemon.types}
            handlePokemon={props.handlePokemon} />
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

export default PokeList;