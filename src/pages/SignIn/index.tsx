import React from 'react';
import signInImage from '../../assets/neutral.jpg'

import { Container, WelcomeMessage } from './styles';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';

import { FcGoogle } from 'react-icons/fc'


export const SignIn: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={signInImage} alt="person holding a cell phone on a login page" />
      </div>
      <main>
        <WelcomeMessage>Welcome to Panorama, <br/> Sign To Continue</WelcomeMessage>
        <form>
          <Input label='Email' placeholder='example@email.com'/>
          <Input label='Password' placeholder='******'/>
          <Link href="#">Forgot Password?</Link>
          <Button>Sign In</Button>
          <Button variant='default'>
            <FcGoogle />
            Sign In With Google
          </Button>
        </form>
        <span>
          Dont´t have an account?
          <Link href="#">Create a account</Link>
        </span>
      </main>
    </Container>
  );
}
