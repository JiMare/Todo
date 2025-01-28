import styled from 'styled-components';

export const Textarea = styled.textarea<{ error?: boolean }>`
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
  line-height: 1.2594rem;
  width: 100%;
  padding-block: 0.8rem;
  min-height: 9rem;
  resize: vertical;
`;
