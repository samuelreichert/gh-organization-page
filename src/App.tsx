import { useState } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { styled } from '@stitches/react';
import { client } from './apollo-client';
import OrganizationInfo from './components/OrganizationInfo';
import OrganizationSearch from './components/OrganizationSearch';
import PinnedRepos from './components/PinnedRepos';
import QueryMessage from './components/QueryMessage';
import ReposList from './components/ReposList';

const SELECTED_ORGANIZATION_KEY = 'selected-github-organization';
const RECENT_ORGANIZATIONS_KEY = 'recent-github-organizations';
const MAX_RECENT_ORGANIZATIONS = 5;

const AppContainer = styled('main', {
  backgroundColor: '#ffffff',
  border: '1px solid #ebebeb',
  borderRadius: '4px',
  boxShadow: '0 0 3px rgba(0, 0, 0, 0.075)',
  margin: '40px 0',
  padding: '10px 0',
  width: 'min(1106px, calc(100vw - 32px))',
});

const loadSelectedOrganization = () =>
  localStorage.getItem(SELECTED_ORGANIZATION_KEY) ?? '';

const loadRecentOrganizations = () => {
  try {
    const organizations = JSON.parse(
      localStorage.getItem(RECENT_ORGANIZATIONS_KEY) ?? '[]',
    );

    return Array.isArray(organizations)
      ? organizations.filter(
          (organization): organization is string =>
            typeof organization === 'string',
        )
      : [];
  } catch {
    return [];
  }
};

const App = () => {
  const [selectedOrganization, setSelectedOrganization] = useState(
    loadSelectedOrganization,
  );
  const [recentOrganizations, setRecentOrganizations] = useState(
    loadRecentOrganizations,
  );

  const selectOrganization = (login: string) => {
    const nextRecentOrganizations = [
      login,
      ...recentOrganizations.filter((organization) => organization !== login),
    ].slice(0, MAX_RECENT_ORGANIZATIONS);

    localStorage.setItem(SELECTED_ORGANIZATION_KEY, login);
    localStorage.setItem(
      RECENT_ORGANIZATIONS_KEY,
      JSON.stringify(nextRecentOrganizations),
    );
    setSelectedOrganization(login);
    setRecentOrganizations(nextRecentOrganizations);
  };

  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <OrganizationSearch
          onSearch={selectOrganization}
          recentOrganizations={recentOrganizations}
          selectedOrganization={selectedOrganization}
        />
        {selectedOrganization ? (
          <div key={selectedOrganization}>
            <OrganizationInfo orgLogin={selectedOrganization} />
            <PinnedRepos orgLogin={selectedOrganization} />
            <ReposList orgLogin={selectedOrganization} />
          </div>
        ) : (
          <QueryMessage>
            Search for a GitHub organization to view its repositories.
          </QueryMessage>
        )}
      </AppContainer>
    </ApolloProvider>
  );
};

export default App;
