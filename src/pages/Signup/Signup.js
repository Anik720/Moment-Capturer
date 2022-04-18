import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sendEmailVerification, sending, errorr] =
    useSendEmailVerification(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const handlerSubmit = (e) => {
    createUserWithEmailAndPassword(email, password);
    e.preventDefault();
  };
  return (
    <div className='w-50 m-auto'>
      <h1 className='text-center'>Registration</h1>
      <Form onSubmit={handlerSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            onBlur={handlerEmail}
            placeholder='Enter email'
            required
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            onBlur={handlerPassword}
            placeholder='Password'
            required
          />
        </Form.Group>

        <Button
          variant='dark'
          type='submit'
          className='d-block w-50 m-auto my-4'>
          Submit
        </Button>
        <Button
          onClick={() => {
            signInWithGoogle();
          }}
          variant='dark'
          className='d-block w-50 m-auto'>
          <img
            src='https://github.com/ProgrammingHero1/genius-car-service-direction-module-62/blob/main/src/images/social/google.png?raw=true'
            width={'20px'}
            alt=''
          />
          Google Signup
        </Button>
      </Form>

      <p>
        Already have an Account? <Link to='/login'>Login Here</Link>
      </p>
    </div>
  );
};

export default Signup;
