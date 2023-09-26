import React from 'react';
import {Link, useParams} from 'react-router-dom';

const UserInfo = ({user}) => {
  const {userid} = useParams();

  return (
    <section>
      <h5>{user.id}</h5>

      <Link to='/about'>About</Link>
    </section>
  );
};

export default UserInfo;
