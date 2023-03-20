import { ArrowLeft } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Link } from '../../../components/Link';

import { Container } from '../styles';

export const SetNewPassword: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Set new password</h1>
        <p>your new password must be different to <br/> previously used passwords</p>
      </div>
      <form action='/forgot-password/password-reset'>
        <Input label='Password' type={'password'} placeholder='******' />
        <Input label='Confirm Password' type={'password'} placeholder='******' />
        <Button>Reset password</Button>
      </form>
      <Link href='/'>
        <ArrowLeft size={14} weight="bold" style={{marginRight: '1rem'}}/>
        Back to log in
      </Link>
    </Container>
  );
}
