import { useState, useEffect } from 'react';

import { Pokemon } from '../../interfaces';
import { usePokedex } from '../../hooks/pokedex';

import Loader from '../Loader';

import { Card, Sprite, PokemonInfo, TypesContainer, TypeBadge } from './styles';

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
    <Card key={pokemonData.name} pokemonType={pokemonData.types[0].type.name}>
      <Sprite alt={pokemonData.name} src={pokemonData.sprites.front_default} />
      <PokemonInfo>
        <p>{pokemonData.name}</p>
        <TypesContainer>
          {pokemonData.types.map(pokemonType => (
            <TypeBadge key={`${pokemonData.id}${pokemonType.type.name}`}>{pokemonType.type.name}</TypeBadge>
          ))}
        </TypesContainer>
        <h1>#{pokemonData.id.toString().padStart(3, '0')}</h1>
      </PokemonInfo>
    </Card>
  ) : (
    <Loader />
  );
}

export default PokemonCard;
