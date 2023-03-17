import React, { InputHTMLAttributes } from 'react';

import { Container, Label, DefaultInput } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<Props> = ({label, type='text', ...rest}:Props) => {

  const identifier = label.toLowerCase().trim().replace(" ", "_")

  return (
    <Container>
      <Label htmlFor={identifier}>{label}</Label>
      <DefaultInput type={type} name={identifier} id={identifier} {...rest} />
    </Container>
  );
}
