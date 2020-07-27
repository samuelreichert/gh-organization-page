import { gql } from '@apollo/client';

export const REPOSITORIES_FROM_ORG = gql`
  query ($login: String!) {
    organization(login: $login) {
      id
      repositories(first: 50, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          description
          forkCount
          isArchived
          isFork
          isMirror
          licenseInfo {
            nickname
            spdxId
          }
          name
          parent {
            url
            nameWithOwner
          }
          primaryLanguage {
            id
            name
            color
          }
          stargazers {
            totalCount
          }
          updatedAt
          url
        }
      }
    }
  }
`;
