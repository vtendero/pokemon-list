import React from "react";
import Pokemon from './Pokemon';
import '../styles/PokemonList.scss';


class PokemonList extends React.Component {
  render() {
    const item= this.props.pokemones.map(pokemon => {
      return (
        <li key= {pokemon.id}>
          <Pokemon pokemonProp= {pokemon} />
        </li>
      );
    });
    return (
      <ul>
        {item}
      </ul>
    );
  }
}


export default PokemonList;