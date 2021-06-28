import { useState, useEffect } from 'react';

import { Pokemon } from '../interfaces';
import { usePokedex } from '../hooks/pokedex';

interface PokemonCardProps {
  name: string;
}

function PokemonCard({ name }: PokemonCardProps) {
  const { getPokemonByName } = usePokedex();

  const [pokemonData, setPokemonData] = useState<Pokemon>();

  useEffect(() => {
    async function getPokemon(): Promise<void> {
      const data = await getPokemonByName(name);
      setPokemonData(data);
    }

    getPokemon();
  }, [getPokemonByName, name]);

  return pokemonData ? (
    <div key={pokemonData.name}>
      <h1>
        #{pokemonData.id} - {pokemonData.name} ({pokemonData.types.map(type => type.type.name).join(', ')})
      </h1>
    </div>
  ) : (
    <h1>LOADING POKEMON!</h1>
  );
}

export default PokemonCard;
