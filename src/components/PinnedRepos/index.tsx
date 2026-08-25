import { useQuery } from '@apollo/client/react';
import type { PinnedRepository } from '../../types';
import PinnedRepoItem from '../PinnedRepoItem';
import QueryMessage from '../QueryMessage';
import { PINNED_REPOSITORIES_FROM_ORG } from './query';
import { Container, PinnedItemsWrapper, Title } from './style';

interface PinnedReposData {
  organization: {
    pinnedItems: {
      nodes: Array<PinnedRepository | null>;
    };
  } | null;
}

interface PinnedReposProps {
  orgLogin: string;
}

const PinnedRepos = ({ orgLogin }: PinnedReposProps) => {
  const { loading, error, data } = useQuery<PinnedReposData>(
    PINNED_REPOSITORIES_FROM_ORG,
    {
      variables: { login: orgLogin },
    },
  );

  if (loading)
    return <QueryMessage>Loading pinned repositories...</QueryMessage>;
  if (error) {
    return (
      <QueryMessage error>
        {`Unable to load pinned repositories: ${error.message}`}
      </QueryMessage>
    );
  }
  if (!data?.organization) {
    return (
      <QueryMessage error>
        {`Organization "${orgLogin}" was not found.`}
      </QueryMessage>
    );
  }

  return (
    <Container>
      <Title className="pinned-repositories-title">Pinned repositories</Title>
      <PinnedItemsWrapper>
        {data.organization.pinnedItems.nodes.map(
          (repository) =>
            repository && (
              <PinnedRepoItem key={repository.url} repository={repository} />
            ),
        )}
      </PinnedItemsWrapper>
    </Container>
  );
};

export default PinnedRepos;
