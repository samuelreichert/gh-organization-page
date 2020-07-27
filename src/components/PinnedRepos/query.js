import { gql } from '@apollo/client';

export const PINNED_REPOSITORIES_FROM_ORG = gql`
  query ($login: String!) {
    organization(login: $login) {
      id
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            name
            description
            forkCount
            stargazers {
              totalCount
            }
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
  }
`;
