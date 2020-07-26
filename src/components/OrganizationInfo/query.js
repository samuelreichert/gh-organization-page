import { gql } from '@apollo/client';

export const BASIC_ORGANIZATION_INFO = gql`
  query ($login: String!) {
    organization(login: $login) {
      avatarUrl
      location
      name
      websiteUrl
    }
  }
`;
