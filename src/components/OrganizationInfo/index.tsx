import { useQuery } from '@apollo/client/react';
import { LinkIcon, LocationIcon } from '../icons';
import QueryMessage from '../QueryMessage';
import { BASIC_ORGANIZATION_INFO } from './query';
import {
  BasicInfo,
  BasicInfoItem,
  IconWrapper,
  Image,
  InfoContainer,
  Link,
  Title,
} from './style';

interface OrganizationInfoData {
  organization: {
    avatarUrl: string;
    location: string | null;
    name: string;
    websiteUrl: string | null;
  } | null;
}

interface OrganizationInfoProps {
  orgLogin: string;
}

const OrganizationInfo = ({ orgLogin }: OrganizationInfoProps) => {
  const { loading, error, data } = useQuery<OrganizationInfoData>(
    BASIC_ORGANIZATION_INFO,
    {
      variables: { login: orgLogin },
    },
  );

  if (loading)
    return <QueryMessage>Loading organization information...</QueryMessage>;
  if (error) {
    return (
      <QueryMessage error>
        {`Unable to load organization information: ${error.message}`}
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

  const { avatarUrl, location, name, websiteUrl } = data.organization;

  return (
    <InfoContainer>
      <Image src={avatarUrl} alt={name} className="org-logo" />
      <div>
        <Title className="org-name">{name}</Title>
        <BasicInfo>
          {location && (
            <BasicInfoItem>
              <IconWrapper indented>
                <LocationIcon />
              </IconWrapper>
              {location}
            </BasicInfoItem>
          )}
          {websiteUrl && (
            <BasicInfoItem>
              <IconWrapper>
                <LinkIcon />
              </IconWrapper>
              <Link href={websiteUrl} className="org-website">
                {websiteUrl}
              </Link>
            </BasicInfoItem>
          )}
        </BasicInfo>
      </div>
    </InfoContainer>
  );
};

export default OrganizationInfo;
