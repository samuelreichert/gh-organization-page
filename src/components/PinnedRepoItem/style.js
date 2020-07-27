import styled from 'styled-components';

export const Card = styled.a`
  border: 1px solid #ebebeb;
  border-radius: 4px;
  color: #102231;
  cursor: pointer;
  height: 176px;
  padding: 20px;
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
