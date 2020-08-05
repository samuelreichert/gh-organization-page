import React from 'react';
import { useQuery } from '@apollo/client';
import { PINNED_REPOSITORIES_FROM_ORG } from './query';
import { Container, PinnedItemsWrapper, Title } from './style';
import PinnedRepoItem from '../PinnedRepoItem';

const PinnedRepos = () => {
  const orgLogin = process.env.REACT_APP_GITHUB_ORGANIZATION;
  const { loading, error, data } = useQuery(PINNED_REPOSITORIES_FROM_ORG, { variables: { login: orgLogin }});

  if (loading) return null;
  if (error) return null;

  const {
    organization: {
      pinnedItems: {
        nodes: pinnedRepos
      }
    }
  } = data;

  return (
    <Container>
      <Title className='pinned-repositories-title'>Pinned repositories</Title>

      <PinnedItemsWrapper>
        {pinnedRepos.map((repo, i) => <PinnedRepoItem key={i} repository={repo} />)}
      </PinnedItemsWrapper>
    </Container>
  );
};

export default PinnedRepos;
