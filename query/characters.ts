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
