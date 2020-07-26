import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client';
import OrganizationInfo from './components/OrganizationInfo';
import PinnedRepos from './components/PinnedRepos';
import ReposList from './components/ReposList';
import { AppContainer } from './App.style';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <OrganizationInfo />
        <PinnedRepos />
        <ReposList />
      </AppContainer>
    </ApolloProvider>
  );
};

export default App;
