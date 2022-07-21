import { Container, Text } from "@nextui-org/react";

//Default message when no have favorites 
const NullFavorites = () => {
  return (
    <Container
      direction="column"
      css={{
        display: "flex",
        height: "calc(100vh -100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "cender",
      }}
    >
      <Text h1> No hay favoritos</Text>
    </Container>
  );
};

export default NullFavorites;
