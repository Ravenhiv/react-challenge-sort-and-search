import React from 'react';
import images from '../data/images'

const UserData = props => {
  const img = images[props.user.image]
  const id = props.user.id
  return (
    <tr className="user-data" onClick={() => props.handleUserClick(id)}>
      <td className="user-image">
        <img src={img} alt={props.user.name} width="60" height="60" />
      </td>
      <td className="user-name">{props.user.name}</td>
      <td className="user-age">{props.user.age}</td>
      <td className="user-phone">{`8 ${props.user.phone}`}</td>
    </tr>
  )
}

export default UserData;
