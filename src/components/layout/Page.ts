import styled from 'styled-components';

export const Page = styled.div<{ center?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  min-height: 100dvh;
  position: relative;
`;
