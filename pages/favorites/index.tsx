import { Layout } from "../../layouts";
import { useState, useEffect } from "react";
import { Grid } from "@nextui-org/react";
import { localFavorites } from "../../utils";
import NullFavorites from "../../components/atoms/NullFavorites/NullFavorites";
import { CardCharacter } from "../../components/molecules";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_ID_CARD } from "../../query/characters";
import { CharacterList } from "../../interfaces/character-list";

const FavoritesPage = () => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<number[]>([]);
  useEffect(() => {
    setFavoriteCharacters(localFavorites.characters());
  }, []);
  const { data } = useQuery(GET_CHARACTER_ID_CARD, {
    variables: { characterId: favoriteCharacters },
  });
  return (
    <Layout title="Pokémones favoritos">
      <Grid.Container gap={2} justify="flex-start">
        {favoriteCharacters.length === 0 ? (
          <NullFavorites />
        ) : (
          data?.charactersByIds?.map((character: CharacterList) => (
            <CardCharacter character={character} />
          ))
        )}
      </Grid.Container>
    </Layout>
  );
};

export default FavoritesPage;
