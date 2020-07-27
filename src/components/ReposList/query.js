import { gql } from '@apollo/client';

export const REPOSITORIES_FROM_ORG = gql`
  query ($login: String!) {
    organization(login: $login) {
      id
      repositories(first: 50, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          description
          isArchived
          isFork
          isMirror
          name
          url
          primaryLanguage {
            id
            name
            color
          }
        }
      }
    }
  }
`;
