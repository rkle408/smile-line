import React from 'react';
import './Login.css';

const Login = ({ handleLogin }) => {
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