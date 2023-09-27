import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';

const Register = ({setUser}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!fn || !ln || !email || !pw || pw !== spw){
      alert('All info required in order to create account');
    }
    
    const body = { fn, ln, email, pw };
    
    fetch('/api/createuser', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      }
    )
      .then(res => res.json())
      .then(res => {
        if(res.includes('already exists')){
          alert(email + ' exits');
        }
        else if(res.includes('done')){
          setUser({fn, ln, email});
          navigate('/dashboard/');
        }
      })
      .catch(err => console.log('POST to /api/creatuser FAILED ', err));
    
    

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
