import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
  variant?: 'primary' | 'default';
}

export const Button: React.FC<Props> = ({ children, variant='primary' }: Props) => {
  return (
    <Container variant={variant}>
      {children}
    </Container>
  );
}
