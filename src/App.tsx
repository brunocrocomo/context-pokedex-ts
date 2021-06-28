import { useState, useEffect } from 'react';

import { NamedAPIResource } from './interfaces';
import { usePokedex } from './hooks/pokedex';

import PokemonCard from './components/PokemonCard';

function App() {
  const { fetchingPokemonList, pokemonList } = usePokedex();
  const [filteredPokemonList, setFilteredPokemonList] = useState<NamedAPIResource[]>([]);
  const [offset, setOffset] = useState(20);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setFilteredPokemonList(pokemonList.slice(0, offset));
  }, [pokemonList, offset]);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setInputValue(value);
  }

  function handleSearch() {
    if (inputValue) {
      const filteredList = pokemonList.filter(pokemon => {
        return pokemon.name.includes(inputValue);
      });

      setFilteredPokemonList(filteredList);
    }
  }

  function handleClear() {
    setInputValue('');
    setFilteredPokemonList(pokemonList.slice(0, offset));
  }

  function handleLoadMorePokemon() {
    setOffset(oldOffset => oldOffset + 20);
  }

  return (
    <div>
      <h1>Pokédex</h1>
      <input type='text' onChange={handleOnChange} value={inputValue} />
      <button onClick={handleSearch}>Buscar</button>
      <button onClick={handleClear}>Limpar</button>
      {fetchingPokemonList ? (
        <h1>Loading Pokemon List</h1>
      ) : (
        filteredPokemonList.map(pokemon => <PokemonCard name={pokemon.name} />)
      )}
      <button onClick={handleLoadMorePokemon}>Carregar mais</button>
    </div>
  );
}

export default App;
