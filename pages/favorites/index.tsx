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
  //Obtain list in localstorage at favorites characters
  useEffect(() => {
    setFavoriteCharacters(localFavorites.characters());
  }, []);
  //Obtain response graphql of localStorage items
  const { data } = useQuery(GET_CHARACTER_ID_CARD, {
    variables: { characterId: favoriteCharacters },
  });
  return (
    <Layout title="Personajes favoritos de Rick and Morty">
      <Grid.Container gap={2} justify="flex-start">
        {favoriteCharacters.length === 0 ? (
          <NullFavorites />
        ) : (
          data?.charactersByIds?.map(
            (character: CharacterList, index: number) => (
              <CardCharacter character={character} key={index} />
            )
          )
        )}
      </Grid.Container>
    </Layout>
  );
};

export default FavoritesPage;
