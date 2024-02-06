import { gql } from "@apollo/client";
export const GET_COUNTRY = gql`
  query Query {
    countries {
      name
      native
      capital
      emoji
      currency
      emojiU
      continent{
        name
      }
      languages {
        code
        name
      }
    }
  }
`;
