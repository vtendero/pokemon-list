import "../stylesheets/pokemon.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

function Pokemon(props) {
  const [favClass, setFavClass] = useState("");

  const handleClick = () => {
    props.handleFavorites(props.id);
    !favClass ? setFavClass("favorite") : setFavClass("");
  };
  const pokemonTypes = props.types.map((item, i) => {
    return (
      <li key={i} className={`pokemon__list--type ${item}`}>
        {item}
      </li>
    );
  });
  return (
    <article
      id={props.id}
      className={`pokemon ${favClass}`}
      onClick={handleClick}
    >
      <img className="pokemon__img" src={props.imgSrc} alt={props.name} />
      <h2 className="pokemon__name">{props.name}</h2>
      <ul className="pokemon__list">{pokemonTypes}</ul>
      <p className="pokemon__evolution">Evol &raquo; {props.evolution}</p>
    </article>
  );
}
Pokemon.propTypes = {
  id: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  evolution: PropTypes.string,
};
export default Pokemon;