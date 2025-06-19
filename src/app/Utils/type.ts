export type PokemonDetail = {
  id: number;
  forms: { name: string }[];
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  weight: number;
  stats: {
    base_stat: number;
    stat: { name: string };
  }[];
  abilities: {
    ability: { name: string };
  }[];
};

export type pokemonList = {
  results: { name: string; url: string }[];
};
export type pokemon = {
  name: string;
  url: string;
};
