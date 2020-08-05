import React from 'react';
import { Card, Color, MetaInfo, MetaInfoItem, RepoDescription, RepoName } from './style';
import { GitBranchIcon, StarIcon } from '../icons';

const PinnedRepoItem = ({ repository }) => (
  <Card href={repository.url} className='pinned-repo-item'>
    <div>
      <RepoName className='pinned-repo-name'>{repository.name}</RepoName>
      <RepoDescription className='pinned-repo-description'>{repository.description}</RepoDescription>
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
