import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'process.env.GRAPHQL_UR',
  cache: new InMemoryCache()
});
