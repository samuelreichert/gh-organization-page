import React from 'react';
import { Card, Color, MetaInfo, MetaInfoItem, RepoDescription, RepoName } from './style';
import { GitBranchIcon, StarIcon } from '../icons';

const PinnedRepoItem = ({ repository }) => (
  <Card href={repository.url}>
    <div>
      <RepoName>{repository.name}</RepoName>
      <RepoDescription>{repository.description}</RepoDescription>
    </div>

    <MetaInfo>
      {repository.primaryLanguage &&
        <MetaInfoItem>
          <Color color={repository.primaryLanguage.color} /> {repository.primaryLanguage.name}
        </MetaInfoItem>
      }

      {!!repository.stargazers.totalCount &&
        <MetaInfoItem>
          <StarIcon /> {repository.stargazers.totalCount}
        </MetaInfoItem>
      }

      {!!repository.forkCount &&
        <MetaInfoItem>
          <GitBranchIcon /> {repository.forkCount}
        </MetaInfoItem>
      }
    </MetaInfo>
  </Card>
);

export default PinnedRepoItem;
