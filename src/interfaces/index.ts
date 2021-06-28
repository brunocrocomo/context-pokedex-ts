export interface NamedAPIResource {
  name: string;
  url: string;
}

interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

interface ItemSprites {
  front_default: string;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: ItemSprites;
  types: PokemonType[];
}
