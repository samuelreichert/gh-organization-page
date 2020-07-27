import React from 'react';
import { Container, RepoDescription, RepoFork, RepoName } from './style';
import { Color, MetaInfo, MetaInfoItem } from '../PinnedRepoItem/style';
import { Link } from '../OrganizationInfo/style';
import { GitBranchIcon, LawIcon, StarIcon } from '../icons';

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const buildReadableDate = (date) => {
  const localDate = new Date(date);
  const dateYear = localDate.getFullYear();
  const currentYear = new Date().getFullYear();

  return `${localDate.getDate()} ${monthNames[localDate.getMonth()]} ${currentYear !== dateYear ? dateYear : ''}`;
}

const RepoItem = ({ repository }) => (
  <Container href={repository.url}>
    <RepoName>{repository.name}</RepoName>

    {repository.isFork &&
      <RepoFork>
        Forked from <Link href={repository.parent.url}>{repository.parent.nameWithOwner}</Link>
      </RepoFork>
    }

    <RepoDescription>{repository.description}</RepoDescription>

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

      {(repository.licenseInfo?.nickname || repository.licenseInfo?.spdxId) &&
        <MetaInfoItem>
          <LawIcon /> {repository.licenseInfo.nickname || repository.licenseInfo.spdxId}
        </MetaInfoItem>
      }

      <MetaInfoItem>
        Updated on {buildReadableDate(repository.updatedAt)}
      </MetaInfoItem>
    </MetaInfo>
  </Container>
);

export default RepoItem;
