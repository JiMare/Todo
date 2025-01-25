import styled from 'styled-components';

export const Input = styled.input`
  height: 3.125rem;
  border-radius: 0.75rem;
  background-color: inherit;
  outline: none;
  border: 2px solid var(--color-outline);
  color: var(--color-primary-txt);
  padding-inline: var(--spacing-md);
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 99999s ease-out;
    -webkit-text-fill-color: var(--color-white);
    background-color: inherit;
  }
`;
