import React from 'react';
import { Card, RepoName, RepoDescription } from './style';

const PinnedRepoItem = ({ repository }) => (
  <Card href={repository.url}>
    <RepoName>{repository.name}</RepoName>
    <RepoDescription>{repository.description}</RepoDescription>
  </Card>
);

export default PinnedRepoItem;
