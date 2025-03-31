import styled from 'styled-components';

export const Container = styled.div`
  padding: var(--spacing-lg);
  width: 100%;
  @media (min-width: 24.375rem) {
    width: 24.375rem;
  }
`;

export const Box = styled(Container)`
  border: 2px solid var(--color-outline);
  padding: var(--spacing-lg);
  border-radius: 0.75rem;
  position: relative;
`;

export const TopLine = styled.div`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2.5rem;
  height: 3px;
  border-radius: 2px;
  background-color: var(--color-secondary-txt);
  opacity: 50%;
`;
