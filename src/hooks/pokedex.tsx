import React, { createContext, useState, useRef, useEffect, useCallback, useContext } from 'react';

import { NamedAPIResource, Pokemon } from '../interfaces';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

interface Pokedex {
  fetchingPokemonList: boolean;
  pokemonList: NamedAPIResource[];
  getPokemonByName(name: string): Promise<Pokemon | undefined>;
}

const PokedexContext = createContext<Pokedex | null>(null);

const PokedexProvider: React.FC = ({ children }) => {
  const [fetchingPokemonList, setFetchingPokemonList] = useState(false);
  const [pokemonList, setPokemonList] = useState<NamedAPIResource[]>([]);
  const pokemonCache = useRef<Map<string, Promise<Pokemon>>>(new Map());

  useEffect(() => {
    async function fetchPokemonList(): Promise<void> {
      setFetchingPokemonList(true);

      const response = await fetch(`${API_URL}?limit=9999`);
      const { results } = await response.json();
      setPokemonList(results);

      setFetchingPokemonList(false);
    }

    fetchPokemonList();
  }, []);

  const getPokemonByName = useCallback(async (name: string) => {
    if (!pokemonCache.current.has(name)) {
      const promise = new Promise<Pokemon>(async resolve => {
        const response = await fetch(`${API_URL}${name}`);
        const responseJSON = await response.json();

        resolve(responseJSON);
      });

      pokemonCache.current.set(name, promise);
    }

    return pokemonCache.current.get(name);
  }, []);

  const value = React.useMemo(
    () => ({ fetchingPokemonList, pokemonList, getPokemonByName }),
    [fetchingPokemonList, getPokemonByName, pokemonList]
  );

  return <PokedexContext.Provider value={value}>{children}</PokedexContext.Provider>;
};

function usePokedex(): Pokedex {
  const context = useContext(PokedexContext);

  if (!context) {
    throw new Error(`usePokedex must be used within a PokedexProvider`);
  }

  return context;
}

export { PokedexProvider, usePokedex };
