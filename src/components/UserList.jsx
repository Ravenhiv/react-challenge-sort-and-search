import React from 'react';
import UserData from './UserData'

const UserList = props => {
  return (
    <div className="col-lg-10 col-md-9 col-sm-8">
      <table className="user-list table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {props.currentUsers.map((user) => (
            <UserData
              user={user}
              key={user.id}
              handleUserClick={props.handleUserClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
