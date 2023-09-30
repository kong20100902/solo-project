import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Signin = ({setUser}) => {
  const navigate = useNavigate();

  const handleSignin = e => {
    e.preventDefault();
    if(!email || !pw){
      alert('All info required in order to sign in');
    }
    fetch(`/api/getuser?email=${email}`)
      .then(res => res.json())
      .then(res => { 
        if(res === 'no user' || res.pw !== pw){
          setMsg('Sign in info does not match');
        }
        else{
          navigate('/dashboard');
        }
      })
      .catch(err => console.log('GET to /api/getuser FAILED ', err));

  };

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <form onSubmit={handleSignin}>
      <div>
        <label>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type='text' value={pw} onChange={(e) => setPw(e.target.value)} />
      </div>
      <button>Sign In</button>
      <div>{msg}</div>
    </form> 
  );
};

export default Signin;
