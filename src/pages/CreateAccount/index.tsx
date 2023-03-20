import React from 'react';
import signUpImage from '../../assets/create-account.jpg'

import { Container } from './styles';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { FcGoogle } from 'react-icons/fc'
import { WelcomeMessage } from '../SignIn/styles';


export const CreateAccount: React.FC = () => {
  return (
    <Container>
      <main>
        <WelcomeMessage>Welcome to Panorama, <br/> Sign Up Continue</WelcomeMessage>
        <Button variant='default'>
          <FcGoogle />
          Sign Up With Google
        </Button>
        <span>OR</span>
        <form action='/'>
          <Input label='Email' placeholder='example@email.com' type={'email'}/>
          <Input label='Password' placeholder='******' type={'password'}/>
          <Input label='Confirm Password' placeholder='******' type={'password'}/>
          <Button>Create Account</Button>
        </form>
      </main>
      <div>
        <img src={signUpImage} alt="person holding a cell phone on a login page" />
      </div>
    </Container>
  );
}
