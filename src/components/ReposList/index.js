import React from 'react';
import { useQuery } from '@apollo/client';
import { REPOSITORIES_FROM_ORG } from './query';
import { Container, ReposListWrapper, Title } from './style';
import RepoItem from '../RepoItem';

const ReposList = () => {
  const orgLogin = process.env.REACT_APP_GITHUB_ORGANIZATION;
  const { loading, error, data } = useQuery(REPOSITORIES_FROM_ORG, { variables: { login: orgLogin }});

  if (loading) return null;
  if (error) return null;

  const {
    organization: {
      repositories: {
        nodes: repos
      }
    }
  } = data;

  return (
    <Container>
      <Title>Repositories</Title>
      <ReposListWrapper>
        {repos.map((repo, i) => <RepoItem repository={repo} key={i} />)}
      </ReposListWrapper>
    </Container>
  )
};

export default ReposList;
