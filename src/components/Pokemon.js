import '../styles/Pokemon.scss';

const Pokemon= (props) => {
   const pokemonType= props.pokemonProp.types.map((type, index) => {
    return (
        <li key= {index}>
            {type}
        </li>
        );
    });
        return (
           <article>
                <img src={props.pokemonProp.url} 
                    alt={props.pokemonProp.name}>
                </img>
                <h3>{props.pokemonProp.name}</h3>
                <ul>
                    {pokemonType}
                </ul>
            </article>
        )
}

export default Pokemon;