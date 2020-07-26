import styled, { css } from 'styled-components';

export const BasicInfo = styled.ul`
  color: #6A788B;
  font-size: 12px;
  letter-spacing: 0.4px;
  list-style-type: none;
  padding: 0;
`;

export const BasicInfoItem = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 6px;
`;

export const IconWrapper = styled.span`
  ${props => props.left && css`
    padding-left: ${props.left};
  `}
  width: 24px;

  svg {
    margin-right: 8px;
  }
`;

export const Image = styled.img`
  height: 132px;
  margin-right: 8px;
  width: 132px;
`;

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 48px;
  padding: 0 10px;
`;

export const Link = styled.a`
  color: #63A9F3;
`;


export const Title = styled.h1`
  font-size: 22px;
  font-weight: 400;
`;

