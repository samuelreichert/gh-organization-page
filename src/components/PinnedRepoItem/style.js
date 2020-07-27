import styled, { css } from 'styled-components';

export const Card = styled.a`
  border: 1px solid #ebebeb;
  border-radius: 4px;
  color: #102231;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 176px;
  padding: 20px;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-color: #F8F8F8;
  }
`;

export const Color = styled.div`
  border-radius: 10px;
  display: inline-block;
  height: 10px;
  margin-right: 8px;
  width: 10px;

  ${props => props.color && css`
    background-color: ${props.color};
  `}
`;

export const MetaInfo = styled.div`
  color: #687689;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export const MetaInfoItem = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 24px;

  svg {
    margin-right: 8px;
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
