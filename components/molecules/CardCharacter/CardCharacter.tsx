import { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { CharacterList } from "../../../interfaces/character-list";
import { useRouter } from "next/router";

interface CardCharacterProps {
  character: CharacterList;
}

const CardCharacter: FC<CardCharacterProps> = ({ character }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/characters/${character.id}`);
  };
  return (
    <Grid xs={6} sm={3} xl={1.5}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={character.image} width="100%" height={140} />
          <Card.Footer>
            <Row justify="center">
              <Text transform="capitalize">{character.name}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default CardCharacter;
