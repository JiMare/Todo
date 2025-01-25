import React from 'react';
import styled from 'styled-components';
import { SubTitle } from './Typography';

type Props = {
  initials: string;
};

export const Avatar: React.FC<Props> = ({ initials }) => {
  return (
    <Circle>
      <SubTitle small>{initials}</SubTitle>
    </Circle>
  );
};

const Circle = styled.div`
  background-color: var(--color-secondary-txt);
  height: 1.875rem;
  width: 1.875rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
