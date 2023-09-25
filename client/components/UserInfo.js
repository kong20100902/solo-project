import React from 'react';
import {Link, useParams} from 'react-router-dom';

const UserInfo = ({user}) => {
  const {userid} = useParams();

  return (
    <section className='section product'>
      <h5>{user.name}</h5>

      <Link to='/products'>back to products</Link>
    </section>
  );
};

export default UserInfo;
