import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import pokemones from '../data/data.json';
import PokeList from './PokeList';


const App = () => {
  const [data, setData] = useState(pokemones);

    return (
      <>
        <Header />
        <PokeList pokemones={data} />
        <Footer />
      </>
    );
}

export default App;
