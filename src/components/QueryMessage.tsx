import { styled } from '@stitches/react';

const Message = styled('p', {
  color: '#687689',
  fontSize: '14px',
  margin: '12px 24px',
  variants: {
    error: {
      true: {
        color: '#b42318',
      },
    },
  },
});

interface QueryMessageProps {
  children: string;
  error?: boolean;
}

const QueryMessage = ({ children, error = false }: QueryMessageProps) => (
  <Message error={error} role={error ? 'alert' : 'status'}>
    {children}
  </Message>
);

export default QueryMessage;
