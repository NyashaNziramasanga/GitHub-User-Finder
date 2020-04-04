import React from 'react';
import { Link } from 'react-router-dom';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <Link to={`/user/${login}`} className="card">
      <div className="text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
      </div>
    </Link>
  );
}

export default UserItem;
