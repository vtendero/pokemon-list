import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import data from '../data/data.json';
import PokeList from './PokeList';


const App = () => {
  const [pokemons] = useState(data);
  const [favs, setFavs] = useState([]);

  const handlePokemon = id => {
    // console.log(id);
    const selected = pokemons.find(pokemon => id === pokemon.id);
    const favPokemon = favs.findIndex(fav => id === fav.id)
    // console.log(favs);
    if (favPokemon === -1) {
      favs.push(selected);
      setFavs([...favs]);
    } 
    else {
      favs.splice(favPokemon, 1);
      setFavs([...favs]);
    }
  };

    return (
      <>
        <Header />
        <PokeList pokemons={pokemons} handlePokemon={handlePokemon} />
        <Footer />
      </>
    );
}

export default App;