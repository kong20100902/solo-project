import React, { useState, useEffect } from 'react';

const UpdateDelete = ({orderid, agreequote, quoteAgreed, setQuoteAgreed, deleted, setDeleted}) => {

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`/api/quoteaccepted?orderid=${orderid}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'Application/JSON'
        },
      }
    )
      .then(res => res.json())
      .then(res => setQuoteAgreed(!quoteAgreed))
      .catch(err => console.log('PATCH to /api/quoteaccepted FAILED ', err));
  };
  
  const handleDelete = (e) => {
    e.preventDefault();
    if(agreequote === 'yes'){
      alert('Cannot delete order after agreeing with quote');
      return;
    }
    fetch(`/api/deleteorder?orderid=${orderid}`,
      {method: 'DELETE'}
    )
      .then(res => res.json())
      .then(res => setDeleted(!deleted))
      .catch(err => console.log('DELETE to /api/deleteorder FAILED ', err));
    
  };
  return (
    <>
      <button onClick={handleUpdate}>Accept Quote</button>
      <button onClick={handleDelete}>Delete Order</button>
    </>
  );
};

export default UpdateDelete;
