import { gql } from '@apollo/client';

export const REPOSITORIES_FROM_ORG = gql`
  query ($login: String!) {
    organization(login: $login) {
      repositories(first: 50, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          description
          name
          url
        }
      }
    }
  }
`;
