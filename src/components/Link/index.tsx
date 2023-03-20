import { Icon } from '@phosphor-icons/react/dist/lib';
import React, { AnchorHTMLAttributes} from 'react';

import { Container } from './styles';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode | React.ReactNode[];
  href: string;
}

export const Link: React.FC<Props> = ({ children, href="#", ...rest }: Props) => {
  return (
    <Container href={href}>
      {children}
    </Container>
  );
}
