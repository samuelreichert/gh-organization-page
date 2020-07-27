import React from 'react';
import { useQuery } from '@apollo/client';
import { BASIC_ORGANIZATION_INFO } from './query';
import { BasicInfo, BasicInfoItem, IconWrapper, Image, InfoContainer, Link, Title } from './style';
import { LinkIcon, LocationIcon } from '../icons';

const OrganizationInfo = () => {
  const orgLogin = process.env.REACT_APP_GITHUB_ORGANIZATION;
  const { loading, error, data } = useQuery(BASIC_ORGANIZATION_INFO, { variables: { login: orgLogin }});

  if (loading) return null;
  if (error) return null;

  const {
    organization: {
      avatarUrl,
      location,
      name,
      websiteUrl
    }
  } = data;

  return (
    <InfoContainer>
      <Image src={avatarUrl} alt={name} />

      <div>
        <Title>{name}</Title>

        <BasicInfo>
          <BasicInfoItem>
            <IconWrapper left='3px'>
              <LocationIcon />
            </IconWrapper>
            {location}
          </BasicInfoItem>

          <BasicInfoItem>
            <IconWrapper>
              <LinkIcon />
            </IconWrapper>
            <Link href={websiteUrl}>{websiteUrl}</Link>
          </BasicInfoItem>
        </BasicInfo>
      </div>
    </InfoContainer>
  );
};

export default OrganizationInfo;
