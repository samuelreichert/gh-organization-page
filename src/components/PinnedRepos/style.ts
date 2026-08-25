import { styled } from '@stitches/react';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '70px',
  padding: '0 24px',
});

export const PinnedItemsWrapper = styled('div', {
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  justifyItems: 'center',
});

export const Title = styled('h2', {
  fontSize: '18px',
  fontWeight: 400,
  margin: '0 0 24px',
  padding: 0,
});
