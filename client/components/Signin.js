import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';

const Signin = ({setUser}) => {
  const handleSignin = e => {
    e.preventDefault();
    if(!email || !pw){
      alert('All info required in order to sign in');
    }
    fetch(`/api/getUser?email=${email}`)
      .then(res => res.json())
      .then(res => { 
        if(res === 'no user'){
          setMsg('Did not find user');
        }
        else if(res.pw !== pw){
          setMsg('Wrong password');
        }
        else{
          // setUser(res);
          navigate('/dashboard');
        }
      })
      .catch(err => console.log('GET to /api/getuser FAILED ', err));

  };
  const navigate = useNavigate();

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
