import { gql } from "@apollo/client";

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