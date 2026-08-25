import { styled } from '@stitches/react';

export const Container = styled('article', {
  borderTop: '1px solid #EBEBEB',
  color: '#102231',
  cursor: 'pointer',
  padding: '20px 24px',
  textDecoration: 'none',
  width: '100%',
  '&:hover': {
    backgroundColor: '#F8F8F8',
  },
});

export const RepoDescription = styled('p', {
  color: '#2F445C',
  fontSize: '14px',
  margin: '12px 0 24px',
  padding: 0,
});

export const RepoFork = styled('small', {
  color: '#687689',
  display: 'block',
  fontSize: '12px',
});

export const RepoName = styled('a', {
  color: '#102231',
  display: 'block',
  fontSize: '16px',
  margin: 0,
  padding: 0,
  textDecoration: 'none',
});
