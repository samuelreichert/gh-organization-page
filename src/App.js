import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
      </div>
    </ApolloProvider>
  );
}

export default App;
