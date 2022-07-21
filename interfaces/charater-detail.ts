export interface CharacterList {
  character: {
    id: number;
    name: string;
    status: string;
    gender: string;
    image: string;
    species: string;
    episode: episodes[];
  } | undefined;
}

interface episodes {
  id: string;
  episode: string;
}
