import React from 'react';
import {Link} from 'react-router-dom';

const UserInfo = ({user}) => {

  return (
    <section>
      <h5>{user.email}</h5>

    </section>
  );
};

export default UserInfo;
