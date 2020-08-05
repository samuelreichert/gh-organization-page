import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { REPOSITORIES_FROM_ORG } from './query';
import { Container, FlexDiv, ReposListWrapper, Title } from './style';
import RepoItem from '../RepoItem';
import Filters from '../Filters';
import { uniqueLanguagesList } from './helpers';

const ReposList = () => {
  const orgLogin = process.env.REACT_APP_GITHUB_ORGANIZATION;
  const { loading, error, data } = useQuery(REPOSITORIES_FROM_ORG, { variables: { login: orgLogin }});
  const [type, setType] = useState({ value: 'all', label: 'All' });
  const [language, setLanguage] = useState({ value: 'all', label: 'All' });
  const [repositories, setRepositories] = useState([]);
  const languages = uniqueLanguagesList(data?.organization?.repositories?.nodes || []);

  const onChangeLanguage = (option) => {
    const { organization: { repositories: { nodes } } } = data;

    setLanguage(option);
    if (option.value === 'all') return setRepositories(nodes);

    const repos = nodes.filter((repo) => {
      if (repo.primaryLanguage) {
        return repo.primaryLanguage.id === option.value;
      }

      return false;
    });

    setRepositories(repos);
  };

  const onChangeType = (option) => {
    const { organization: { repositories: { nodes } } } = data;

    setType(option);
    if (option.value === 'all') return setRepositories(nodes);

    const repos = nodes.filter((repo) => {
      if (option.value === 'isSources') {
        return !repo.isFork;
      }

      return repo[option.value];
    });

    setRepositories(repos);
  };

  useEffect(() => {
    if (data) {
      const { organization: { repositories: { nodes } } } = data;
      setRepositories(nodes);
    }
  }, [data])

  if (loading) return null;
  if (error) return null;

  return (
    <Container>
      <FlexDiv>
        <Title className='repos-list-title'>Repositories</Title>

        <Filters
          languages={languages}
          languageSelected={language}
          onChangeLanguage={onChangeLanguage}
          onChangeType={onChangeType}
          typeSelected={type}
        />
      </FlexDiv>

      <ReposListWrapper>
        {repositories.map((repo, i) => <RepoItem repository={repo} key={i} />)}
      </ReposListWrapper>
    </Container>
  )
};

export default ReposList;
