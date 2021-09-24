import { useState } from 'react/cjs/react.development';
import '../styles/pokemon.scss';

const Pokemon= (props) => {
    const [favHideClass, setFavHideClass] = useState('');
    const [favSizeClass, setFavSizeClass] = useState('');

    const handleClick = () => {
        props.handlePokemon(props.id);

        if (!favHideClass && !favSizeClass)  {
            setFavHideClass('fav-hide');
            setFavSizeClass('fav-size')
        } else {
            setFavHideClass('');
            setFavSizeClass('');
        } 
    }

   const pokemonType= props.types.map((type, index) => {
    return (
        <li key= {index} className={`pokemonList__item--types_item ${type}`}>
            {type}
        </li>
        );
    });
        return (
           <>
                <img className='pokemonList__item--image'
                    src={props.url} 
                    alt={`imagen de ${props.name}`}>
                </img>
                <div className={`circle ${favHideClass}`} ></div>
                <div className={`line ${favHideClass}`}></div>
                <h3 className='pokemonList__item--name'>
                    {props.name}</h3>
                <ul className='pokemonList__item--types'>
                    {pokemonType}
                </ul>
                <div className={`pokemonList__item--heart ${favSizeClass}`} title="Añadir a favoritos" id={props.id} onClick={handleClick}>❤︎</div>
            </>
        )
}

export default Pokemon;