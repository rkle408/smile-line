import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStytch } from '@stytch/stytch-react';
import './Login.css';

const Login = () => {
  const client = useStytch();
  const navigate = useNavigate();
  
  const handleLogin = async (email) => {
    await client.magicLinks.email.loginOrCreate(email, 
      {
        login_magic_link_url: 'https://example.com/authenticate',
        login_expiration_minutes: 60,
        signup_magic_link_url: 'https://example.com/authenticate',
        signup_expiration_minutes: 60,
      })

    navigate('/checkemail');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { email } = e.target.elements;

    localStorage.setItem('email', email.value);

    handleLogin(email.value)
    
  }
  return (
    <div className='login'>
      <h3>Please Login/SignUp!</h3>
      <form className='loginForm' onSubmit={handleSubmit}>
        <input type='email' name='email' id='' placeholder='e.g. sample@email.com' />
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login;