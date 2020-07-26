import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 14px;
`;

export const PinnedItemsWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 24px;
  padding: 0;
`;
