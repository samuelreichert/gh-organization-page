import { styled } from '@stitches/react';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
});

export const FlexDiv = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '24px',
});

export const ReposListWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
});

export const Title = styled('h2', {
  fontSize: '18px',
  fontWeight: 400,
  margin: '0 24px',
  padding: 0,
});
