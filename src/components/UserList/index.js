import React from "react";

import "./styles.css";

export default function UserList({ user }) {
  return (
    <div className="container">
      <ul className="list">
        <li className="list-item">
          <img src={user.avatar_url} alt={user.login} />
          <div className="desc">
            <h5>{user.login}</h5>
            <p>{user.bio}</p>
            <small>seguidores : {user.followers}</small>
            <small>seguindo : {user.following}</small>
          </div>
          <div className="location">
            <h5>{user.location}</h5>
          </div>
        </li>
      </ul>
    </div>
  );
}
