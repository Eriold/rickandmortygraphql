import type { NextPage } from "next";
import { Button, Grid, Spacer } from "@nextui-org/react";
import { Layout } from "../layouts";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../query/characters";
import { CardCharacter } from "../components/molecules";
import { CharacterList } from "../interfaces/character-list";
import { useState } from "react";

const Home: NextPage = () => {
  const [nextPage, setNextPage] = useState(1);
  //Obtain the general list graphql
  const { data } = useQuery(GET_CHARACTERS, {
    variables: { nextPage },
  });
  //Validation so that the list does not exceed the limit pages
  const nexPageCount = (num: number) => {
    if (nextPage <= 1 && num === -1) {
      return;
    } else if (nextPage == data?.characters?.info?.pages) {
      return;
    } else {
      setNextPage(nextPage + num);
    }
  };
  return (
    <Layout title="Listado de Pókemons">
      <Grid.Container gap={2} justify="flex-start">
        {data?.characters?.results?.map((character: CharacterList) => (
          <CardCharacter character={character} key={character.id} />
        ))}
      </Grid.Container>
      <Grid.Container gap={2} justify="center">
        Estás en la página {nextPage} de {data?.characters?.info?.pages}
      </Grid.Container>
      <Grid.Container gap={2} justify="center">
        <Button onClick={() => nexPageCount(-1)}>Página Anterior</Button>
        <Spacer x={1} />
        <Button onClick={() => nexPageCount(+1)}>Página siguiente</Button>
      </Grid.Container>
    </Layout>
  );
};

export default Home;
