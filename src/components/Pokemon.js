import '../styles/pokemon.scss';

const Pokemon= (props) => {
   const pokemonType= props.pokemonProp.types.map((type, index) => {
    return (
        <li key= {index} className={`pokemonList__item--types_item ${type}`}>
            {type}
        </li>
        );
    });
        return (
           <>
                <img className='pokemonList__item--image' 
                    src={props.pokemonProp.url} 
                    alt={`imagen de ${props.pokemonProp.name}`}>
                </img>
                <div className='circle'></div>
                <div className='line'></div>
                <h3 className='pokemonList__item--name'>
                    {props.pokemonProp.name}</h3>
                <ul className='pokemonList__item--types'>
                    {pokemonType}
                </ul>
            </>
        )
}

export default Pokemon;