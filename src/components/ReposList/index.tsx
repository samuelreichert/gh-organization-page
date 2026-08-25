import { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client/react';
import type { FilterOption, Repository } from '../../types';
import Filters from '../Filters';
import QueryMessage from '../QueryMessage';
import RepoItem from '../RepoItem';
import { filterRepositories, uniqueLanguagesList } from './helpers';
import { REPOSITORIES_FROM_ORG } from './query';
import { Container, FlexDiv, ReposListWrapper, Title } from './style';

interface ReposListData {
  organization: {
    repositories: {
      nodes: Array<Repository | null>;
    };
  } | null;
}

const ALL_OPTION: FilterOption = { value: 'all', label: 'All' };

interface ReposListProps {
  orgLogin: string;
}

const ReposList = ({ orgLogin }: ReposListProps) => {
  const { loading, error, data } = useQuery<ReposListData>(
    REPOSITORIES_FROM_ORG,
    {
      variables: { login: orgLogin },
    },
  );
  const [type, setType] = useState(ALL_OPTION);
  const [language, setLanguage] = useState(ALL_OPTION);
  const repositories = useMemo(
    () =>
      data?.organization?.repositories.nodes.filter(
        (repository): repository is Repository => repository !== null,
      ) ?? [],
    [data],
  );
  const languages = useMemo(
    () => uniqueLanguagesList(repositories),
    [repositories],
  );
  const visibleRepositories = useMemo(
    () => filterRepositories(repositories, type, language),
    [repositories, type, language],
  );

  if (loading) return <QueryMessage>Loading repositories...</QueryMessage>;
  if (error) {
    return (
      <QueryMessage error>
        {`Unable to load repositories: ${error.message}`}
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
      <FlexDiv>
        <Title className="repos-list-title">Repositories</Title>
        <Filters
          languages={languages}
          languageSelected={language}
          onChangeLanguage={setLanguage}
          onChangeType={setType}
          typeSelected={type}
        />
      </FlexDiv>
      <ReposListWrapper>
        {visibleRepositories.map((repository) => (
          <RepoItem key={repository.url} repository={repository} />
        ))}
      </ReposListWrapper>
    </Container>
  );
};

export default ReposList;
