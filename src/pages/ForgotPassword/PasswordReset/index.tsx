import { ArrowLeft } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Link } from '../../../components/Link';

import { Container } from '../styles';

export const PasswordReset: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Password reset</h1>
        <p>Your password has been successfully reset.<br/> Click to below to log in magically.</p>
      </div>
      <form action='/'>
        <Button>Continue</Button>
      </form>
    </Container>
  );
}
