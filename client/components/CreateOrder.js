import React, { useState } from 'react';

const CreateOrder = ({user, orderCount, setOrderCount}) => {
  const [link, setLink] = useState('');
  const [note, setNote] = useState('');
  const [msg, setMsg] = useState('');
  const handleOrder = (e) => {
    e.preventDefault();
    const body = {userid : user.userid, link, note };
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
      .then(data => {
        setOrderCount(orderCount + 1);
      })
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
