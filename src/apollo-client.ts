import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const graphqlUrl =
  import.meta.env.VITE_GRAPHQL_URL ?? 'https://api.github.com/graphql';
const githubToken = import.meta.env.VITE_GITHUB_TOKEN ?? '';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: graphqlUrl,
    headers: githubToken ? { authorization: `Bearer ${githubToken}` } : {},
  }),
  cache: new InMemoryCache(),
});
