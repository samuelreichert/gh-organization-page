import { styled } from '@stitches/react';

export const Card = styled('a', {
  border: '1px solid #ebebeb',
  borderRadius: '4px',
  color: '#102231',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  height: '176px',
  justifyContent: 'space-between',
  padding: '20px',
  textDecoration: 'none',
  width: '100%',
  '&:hover': {
    backgroundColor: '#F8F8F8',
  },
});

export const Color = styled('span', {
  backgroundColor: 'var(--language-color)',
  borderRadius: '10px',
  display: 'inline-block',
  height: '10px',
  marginRight: '8px',
  width: '10px',
});

export const MetaInfo = styled('div', {
  alignItems: 'center',
  color: '#687689',
  display: 'flex',
  fontSize: '12px',
});

export const MetaInfoItem = styled('span', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginRight: '24px',
  '& svg': {
    marginRight: '8px',
  },
});

export const RepoDescription = styled('span', {
  color: '#2F445C',
  fontSize: '14px',
});

export const RepoName = styled('p', {
  fontSize: '16px',
  margin: '0 0 12px',
  padding: 0,
});
