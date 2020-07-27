import { gql } from '@apollo/client';

export const PINNED_REPOSITORIES_FROM_ORG = gql`
  query ($login: String!) {
    organization(login: $login) {
      id
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            description
            forkCount
            name
            primaryLanguage {
              id
              name
              color
            }
            stargazers {
              totalCount
            }
            url
          }
        }
      }
    }
  }
`;
