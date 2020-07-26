import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client';
import OrganizationInfo from './components/OrganizationInfo';
import { AppContainer } from './App.style';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <OrganizationInfo />
      </AppContainer>
    </ApolloProvider>
  );
};

export default App;
