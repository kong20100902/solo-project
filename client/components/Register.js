import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
const { Pool } = require('pg');


const pool = new Pool({
  user: 'kong20100902',
  host: '127.0.0.1',
  database: 'solo_project',
  password: '0706aceACE',
  port: 5432,
});

const Register = ({setUser}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pool.query('SELECE NOW()'));

  };

  const navigate = useNavigate();
  const [fn, setFn] = useState('');
  const [ln, setLn] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [spw, setSpw] = useState('');
  const [msg, setMsg]  = useState('');
  
  useEffect(() => {pw === spw ? setMsg('') : setMsg('Your password does not match');});

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type='text' value={fn} onChange={(e) => setFn(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input type='text' value={ln} onChange={(e) => setLn(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type='text' value={pw} onChange={(e) => setPw(e.target.value)} />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type='text' value={spw} onChange={(e) => setSpw(e.target.value)} />
      </div>
      <div>{msg}</div>
      <button>Register</button>
    </form> 
  );
};

export default Register;
