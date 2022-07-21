import { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { CharacterList } from "../../../interfaces/character-list";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addId } from "../../../redux/slices/characterSlice";

interface CardCharacterProps {
  character: CharacterList;
}
//Molecule component that recibe a object and drawf object
const CardCharacter: FC<CardCharacterProps> = ({ character }) => {
  const dispatch = useDispatch();
  const router = useRouter();
//Remove onClick and use onPress of card selected, for recomendation nextui
  const cardSelected = () => {
    dispatch(addId(character.id))
    router.push(`/characters/${character.id}`);
  };
  return (
    <Grid xs={6} sm={3} xl={1.5}>
      <Card isHoverable isPressable onPress={cardSelected}>
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
