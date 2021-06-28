export interface NamedAPIResource {
  name: string;
  url: string;
}

interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

interface PokemonSprites {
  front_default: string;
}

export interface Pokemon {
  id: string;
  name: string;
  sprites: PokemonSprites[];
  types: PokemonType[];
}
