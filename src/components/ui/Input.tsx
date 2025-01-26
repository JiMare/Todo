import styled from 'styled-components';

export const Input = styled.input<{ error?: boolean }>`
  height: 3.125rem;
  border-radius: 0.75rem;
  background-color: inherit;
  outline: none;
  border: 2px solid;
  border-color: ${({ error }) => (error ? 'var(--color-brand)' : 'var(--color-outline)')};
  color: var(--color-primary-txt);
  padding-inline: var(--spacing-md);
  font-size: 0.875rem;
  font-weight: 500;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 99999s ease-out;
    -webkit-text-fill-color: var(--color-white);
    background-color: inherit;
  }
`;
