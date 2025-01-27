import React from 'react';
import styled from 'styled-components';
import { SubTitle, Text } from './Typography';

type Props = {
  initials: string;
  large?: boolean;
};

export const Avatar: React.FC<Props> = ({ initials, large }) => {
  return <Circle large={large}>{large ? <Text bold>{initials}</Text> : <SubTitle small>{initials}</SubTitle>}</Circle>;
};

const Circle = styled.div<{ large?: boolean }>`
  background-color: var(--color-secondary-txt);
  height: ${({ large }) => (large ? '3.75rem' : '1.875rem')};
  width: ${({ large }) => (large ? '3.75rem' : '1.875rem')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
