import { async } from '@firebase/util';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, passReseterror] =
    useSendPasswordResetEmail(auth);
  let navigate = useNavigate();
  let location = useLocation();
  const emailtRef = useRef('');
  const [Currentuser, Currentloading, Currenterror] = useAuthState(auth);
  let showerror;
  let from = location.state?.from?.pathname || '/';
  if (loading || googleloading || Currentloading || sending) {
    return (
      <div class='spinner-border text-primary' role='status'>
        <span class='visually-hidden'>Loading...</span>
      </div>
    );
  }
  if (error || googleerror || Currenterror || passReseterror) {
    showerror = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (user || googleuser) {
    navigate(from, { replace: true });
  }

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmitForm = (e) => {
    signInWithEmailAndPassword(email, password);
    e.preventDefault();
  };
  const handleResetPassword = async () => {
    const email = emailtRef.current.value;
    await sendPasswordResetEmail(email);
    toast('Sent email');
  };
  return (
    <div className='w-50 m-auto'>
      <h1 className='text-center'>Login</h1>
      <Form onSubmit={handleSubmitForm}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            ref={emailtRef}
            onBlur={handlerEmail}
            placeholder='Enter email'
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
          />
        </Form.Group>
        <p className='text-danger'>{showerror}</p>
        <button className='d-block btn btn-dark' onClick={handleResetPassword}>
          Forget Password?
        </button>
        <span>New Person?</span> <Link to='/signup'>Signup here</Link>
        <Button
          variant='dark'
          type='submit'
          className='d-block w-50 m-auto my-4'>
          Submit
        </Button>
        <Button
          onClick={() => signInWithGoogle()}
          variant='dark'
          className='d-block w-50 m-auto'>
          <img
            src='https://github.com/ProgrammingHero1/genius-car-service-direction-module-62/blob/main/src/images/social/google.png?raw=true'
            width={'20px'}
            alt=''
          />
          Google login
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Login;
