import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import OrderList from './OrderList';

const CreateOrder = ({user}) => {
  const [link, setLink] = useState('');
  const [note, setNote] = useState('');
  const [msg, setMsg] = useState('');

  const handleOrder = (e) => {
    e.preventDefault();
    const body = {userid : user.userid, link, note };
    console.log(body);
    if(!link || !note){
      setMsg('Link and note must be provided');
      return;
    }

    fetch('/api/createorder',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      }
    )
      .catch(err => console.log('POST to /api/createorder FAILED ', err));

  };
  return (
    <>
      <form onSubmit={handleOrder}>
        <div>
          <label>Link</label>
          <input type='text' value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <div>
          <label>Notes</label>
          <input type='text' value={note} onChange={(e) => setNote(e.target.value)} />
        </div>
        <button>Submit Order</button>
        <div>{msg}</div>
      </form> 
    </>
  );
};

export default CreateOrder;
