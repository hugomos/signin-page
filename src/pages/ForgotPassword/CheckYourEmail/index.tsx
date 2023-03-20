import React from 'react';
import { ArrowLeft } from '@phosphor-icons/react';

import { Button } from '../../../components/Button';
import { Link } from '../../../components/Link';

import { Container } from '../styles';

export const CheckYourEmail: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Check your email</h1>
        <p>We sent a password reset link to <strong>example@email.com</strong></p>
      </div>
      <form action="/forgot-password/reset-password">
        <Button>Open email app</Button>
      </form>
      <span>
        Din't receive the email?
        <strong>
          <Link href='/forgot-password'>Click to resend</Link>
        </strong>
      </span>
      <Link href='/'>
        <ArrowLeft size={14} weight="bold" style={{marginRight: '1rem'}}/>
        Back to log in
      </Link>
    </Container>
  );
}
