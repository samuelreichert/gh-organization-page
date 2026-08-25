import { styled } from '@stitches/react';

export const BasicInfo = styled('ul', {
  color: '#6A788B',
  fontSize: '12px',
  letterSpacing: '0.4px',
  listStyleType: 'none',
  padding: 0,
});

export const BasicInfoItem = styled('li', {
  alignItems: 'center',
  display: 'flex',
  marginBottom: '6px',
});

export const IconWrapper = styled('span', {
  width: '24px',
  '& svg': {
    marginRight: '8px',
  },
  variants: {
    indented: {
      true: {
        paddingLeft: '3px',
      },
    },
  },
});

export const Image = styled('img', {
  height: '132px',
  marginRight: '8px',
  width: '132px',
});

export const InfoContainer = styled('section', {
  alignItems: 'center',
  display: 'flex',
  marginBottom: '48px',
  padding: '0 10px',
});

export const Link = styled('a', {
  color: '#6A788B',
  textDecoration: 'none',
  '&:hover': {
    color: '#63A9F3',
  },
});

export const Title = styled('h1', {
  fontSize: '22px',
  fontWeight: 400,
});
