import type { CSSProperties } from 'react';
import type { Repository } from '../../types';
import { Link } from '../OrganizationInfo/style';
import { Color, MetaInfo, MetaInfoItem } from '../PinnedRepoItem/style';
import { GitBranchIcon, LawIcon, StarIcon } from '../icons';
import { Container, RepoDescription, RepoFork, RepoName } from './style';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const buildReadableDate = (date: string, today = new Date()) => {
  const localDate = new Date(date);
  const includeYear = today.getFullYear() !== localDate.getFullYear();

  return `${localDate.getDate()} ${monthNames[localDate.getMonth()]}${includeYear ? ` ${localDate.getFullYear()}` : ''}`;
};

interface RepoItemProps {
  repository: Repository;
}

const RepoItem = ({ repository }: RepoItemProps) => (
  <Container className="repository-item">
    <RepoName href={repository.url} className="repository-name">
      {repository.name}
    </RepoName>
    {repository.isFork && repository.parent && (
      <RepoFork>
        Forked from{' '}
        <Link href={repository.parent.url}>
          {repository.parent.nameWithOwner}
        </Link>
      </RepoFork>
    )}
    <RepoDescription className="repository-description">
      {repository.description}
    </RepoDescription>
    <MetaInfo className="repository-meta-info">
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
      {(repository.licenseInfo?.nickname || repository.licenseInfo?.spdxId) && (
        <MetaInfoItem>
          <LawIcon />{' '}
          {repository.licenseInfo.nickname || repository.licenseInfo.spdxId}
        </MetaInfoItem>
      )}
      <MetaInfoItem>
        Updated on {buildReadableDate(repository.updatedAt)}
      </MetaInfoItem>
    </MetaInfo>
  </Container>
);

export default RepoItem;
