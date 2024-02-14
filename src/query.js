import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
  query Query {
    countries {
      name
      code
      capital
      continent {
        name
      }
    }
  }
`;
