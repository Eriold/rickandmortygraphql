import { useState } from "react";
import { NextPage } from "next";
import { Button, Card, Grid, Text } from "@nextui-org/react";
import { CharacterList } from "../../interfaces/charater-detail";
import { localFavorites } from "../../utils";
import { Layout } from "../../layouts";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS_BY_ID } from "../../query/characters";
import { useSelector } from "react-redux";
import { CharacterID } from "../../interfaces/characterId-redux";

const Characters: NextPage = () => {
  //Obtain id of redux
  const characterId = useSelector(
    (state: CharacterID) => state.characterId.value
  );
  //Obtain response of graphql
  const { data } = useQuery<CharacterList>(GET_CHARACTERS_BY_ID, {
    variables: { characterId: characterId },
  });
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existInFavorites(parseInt(characterId))
  );
  //Destructure data of graphql
  const character = data?.character;
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(parseInt(characterId));
    setIsInFavorites(!isInFavorites);
  };
  //Validate color status of character alive
  const statusCharacter = (status = "any") => {
    if (status === "Alive") {
      return { color: "success", estado: "Vivo" };
    } else if (status === "Dead") {
      return { color: "error", estado: "Muerto" };
    } else {
      return { color: "default", estado: "Desconocido" };
    }
  };
  return (
    <Layout title={character?.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ p: "30px" }}>
            <Card.Body>
              <Card.Image
                src={character?.image || ""}
                alt={character?.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize" color="primary">
                {character?.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {isInFavorites ? "En favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30} color={statusCharacter(character?.status).color}>
                Estado: {statusCharacter(character?.status).estado}
              </Text>
              <Text size={25} color="secondary">
                Género: {character?.gender}
              </Text>
              <Text size={25}>
                Número de episodeos: {character?.episode.length}
              </Text>
              <Text size={25}>Especie: {character?.species}</Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default Characters;
