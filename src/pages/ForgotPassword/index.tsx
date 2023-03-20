import { ArrowLeft } from '@phosphor-icons/react';
import React from 'react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';

import { Container } from './styles';

export const ForgotPassword: React.FC = () => {

  return (
    <Container>
      <div>
        <h1>Forgot password?</h1>
        <p>No worries, we'll send you reset instructions</p>
      </div>
      <form action='/forgot-password/verify-email'>
        <Input label='Email' type={'email'} placeholder='Enter your email' 
        />
        <Button>Reset password</Button>
      </form>
      <Link href='/'>
        <ArrowLeft size={14} weight="bold" style={{marginRight: '1rem'}}/>
        Back to log in
      </Link>
    </Container>
  );
}
