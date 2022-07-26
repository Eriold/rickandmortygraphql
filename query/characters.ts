import { gql } from "@apollo/client";

//List of querys obtains with graphql

export const GET_CHARACTERS = gql`
  query getList($nextPage: Int) {
    characters(page: $nextPage) {
      info {
        pages
      }
      results {
        id
        name
        image
        status
      }
    }
  }
`;

export const GET_CHARACTERS_BY_ID = gql`
  query getCharacterById($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      gender
      image
      species
      episode {
        id
        episode
      }
    }
  }
`;

export const GET_CHARACTER_ID_CARD = gql`
  query getCharacterIdCard($characterId: [ID!]!) {
    charactersByIds(ids: $characterId) {
      id
      name
      image
    }
  }
`;
