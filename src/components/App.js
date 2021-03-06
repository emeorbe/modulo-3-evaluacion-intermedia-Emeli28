import React from 'react';
import '../stylesheets/App.scss';
import PokemonList from './PokemonList';
import data from '../data/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data}
  }
  render() {
    return (
      <div className="App">
        <h1 className="main-title">Mi Lista de Pokemons</h1>
        <PokemonList items={this.state.data}/>
      </div>
    );
  }
}

export default App;

