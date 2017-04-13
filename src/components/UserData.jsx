import React from 'react';
import images from '../data/images'

const UserData = ({ user, handleUserClick }) => {
  return (
    <tr className="user-data" onClick={() => handleUserClick(user.id)}>
      <td className="user-image">
        <img src={images[user.image]} alt={user.name} width="60" height="60" />
      </td>
      <td className="user-name">{user.name}</td>
      <td className="user-age">{user.age}</td>
      <td className="user-phone">{`8 ${user.phone}`}</td>
    </tr>
  )
}

export default UserData;
