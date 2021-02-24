import React from "react";
import Pokemon from './Pokemon';
import '../styles/PokeList.scss';


class PokeList extends React.Component {
  render() {
    const pokemon= this.props.pokemones.map(pokemon => {
      return (
        <li key= {pokemon.id}>
          <Pokemon pokemonProp= {pokemon} />
        </li>
      );
    });
    return (
      <ul>
        {pokemon}
      </ul>
    );
  }
}


export default PokeList;