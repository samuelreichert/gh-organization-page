import { styled } from '@stitches/react';

export const Button = styled('button', {
  backgroundColor: '#ffffff',
  border: '1px solid #ebebeb',
  borderRadius: '4px',
  color: '#2F445C',
  cursor: 'pointer',
  fontSize: '14px',
  outline: 'none',
  padding: '8px 12px',
  '&:hover': {
    backgroundColor: '#F8F8F8',
  },
  variants: {
    active: {
      true: {
        backgroundColor: '#63A9F3',
        color: '#ffffff',
        '&:hover': {
          backgroundColor: '#63A9F3',
          color: '#ffffff',
        },
      },
    },
  },
});

export const ButtonWrapper = styled('div', {
  display: 'inline-block',
  position: 'relative',
});

export const Check = styled('span', {
  color: '#63A9F3',
  fontSize: '16px',
});

export const DropDown = styled('div', {
  backgroundColor: '#ffffff',
  border: '1px solid #ebebeb',
  borderRadius: '4px',
  boxShadow: '0 0 16px rgba(0, 0, 0, 0.075)',
  color: '#2F445C',
  display: 'none',
  left: 0,
  margin: 0,
  minWidth: '170px',
  outline: 'none',
  padding: '10px 0',
  position: 'absolute',
  top: '46px',
  zIndex: 1,
  variants: {
    open: {
      true: {
        display: 'block',
      },
    },
  },
});

export const DropDownItem = styled('button', {
  background: 'transparent',
  border: 0,
  color: 'inherit',
  cursor: 'pointer',
  display: 'flex',
  font: 'inherit',
  justifyContent: 'space-between',
  padding: '4px 14px',
  width: '100%',
  '&:hover': {
    backgroundColor: '#F8F8F8',
  },
});
