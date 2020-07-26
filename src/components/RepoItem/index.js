import React from 'react';
import { Container, RepoName, RepoDescription } from './style';

const RepoItem = ({ repository }) => (
  <Container href={repository.url}>
    <RepoName>{repository.name}</RepoName>
    <RepoDescription>{repository.description}</RepoDescription>
  </Container>
);

export default RepoItem;
