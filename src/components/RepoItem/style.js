import styled from 'styled-components';

export const Container = styled.a`
  border-top: 1px solid #EBEBEB;
  color: #102231;
  cursor: pointer;
  padding: 20px 24px;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-color: #F8F8F8;
  }
`;

export const RepoDescription = styled.span`
  color: #2F445C;
  font-size: 14px;
`;

export const RepoName = styled.p`
  font-size: 16px;
  margin: 0 0 12px;
  padding: 0;
`;
