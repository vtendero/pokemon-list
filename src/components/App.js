import React from 'react';
import Header from './Header'
import pokemones from '../data/data.json';
import PokeList from './PokeList';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <PokeList pokemones= {pokemones} />
      </>
    );
  }
}


export default App;