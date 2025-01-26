import React from 'react';
import styled from 'styled-components';

type SwitchProps = {
  checked: boolean;
  onChange: () => void;
};

export const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => (
  <SwitchContainer onClick={onChange}>
    <ToggleSwitch>
      <Checkbox type="checkbox" checked={checked} onChange={onChange} />
      <Slider checked={checked} />
    </ToggleSwitch>
  </SwitchContainer>
);

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const ToggleSwitch = styled.div`
  position: relative;
  width: 2.25rem;
  height: 1.5rem;
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ checked }) => (checked ? 'var(--color-brand)' : 'inherit')};
  transition: 0.4s;
  border-radius: 1rem;
  box-shadow: ${({ checked }) => (checked ? 'none' : '0 0 0 2px var(--color-secondary-txt)')};
  padding: var(--spacing-xxs);

  &::before {
    position: absolute;
    content: '';
    height: 1rem;
    width: 1rem;
    left: ${({ checked }) => (checked ? '1.05rem' : '0.25rem')};
    bottom: 0.25rem;
    background-color: ${({ checked }) => (checked ? 'var(--color-white)' : 'var(--color-secondary-txt)')};
    transition: 0.4s;
    border-radius: 50%;
  }
`;
