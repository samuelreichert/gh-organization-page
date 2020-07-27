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

export const RepoDescription = styled.p`
  color: #2F445C;
  font-size: 14px;
  margin: 12px 0 24px;
  padding: 0;
`;

export const RepoFork = styled.small`
  color: #687689;
  display: block;
  font-size: 12px;
`

export const RepoName = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 0;
`;
