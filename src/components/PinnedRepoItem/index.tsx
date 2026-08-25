import type { CSSProperties } from 'react';
import type { PinnedRepository } from '../../types';
import { GitBranchIcon, StarIcon } from '../icons';
import {
  Card,
  Color,
  MetaInfo,
  MetaInfoItem,
  RepoDescription,
  RepoName,
} from './style';

interface PinnedRepoItemProps {
  repository: PinnedRepository;
}

const PinnedRepoItem = ({ repository }: PinnedRepoItemProps) => (
  <Card href={repository.url} className="pinned-repo-item">
    <div>
      <RepoName className="pinned-repo-name">{repository.name}</RepoName>
      <RepoDescription className="pinned-repo-description">
        {repository.description}
      </RepoDescription>
    </div>
    <MetaInfo>
      {repository.primaryLanguage && (
        <MetaInfoItem>
          <Color
            style={
              {
                '--language-color': repository.primaryLanguage.color,
              } as CSSProperties
            }
          />
          {repository.primaryLanguage.name}
        </MetaInfoItem>
      )}
      {!!repository.stargazers.totalCount && (
        <MetaInfoItem>
          <StarIcon /> {repository.stargazers.totalCount}
        </MetaInfoItem>
      )}
      {!!repository.forkCount && (
        <MetaInfoItem>
          <GitBranchIcon /> {repository.forkCount}
        </MetaInfoItem>
      )}
    </MetaInfo>
  </Card>
);

export default PinnedRepoItem;
