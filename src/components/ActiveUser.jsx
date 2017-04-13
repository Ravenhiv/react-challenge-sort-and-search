import React from 'react'
import images from '../data/images'

const ActiveUser = ({ user }) => {
  if (!user) return (
    <div className="col-lg-2 col-md-3 col-sm-4">
      <h3>Not found</h3>
    </div>
  )
  return (
    <div className="col-lg-2 col-md-3 col-sm-4">
      <div className="thumbnail">
        <img src={images[user.image]} alt=""/>
        <div className="thumbnail-caption">
          <h3>{user.name}</h3>
          <table className="user-info table table-responsive">
            <tbody>
              <tr>
                <td>Age:</td>
                <td>{user.age}</td>
              </tr>
              <tr>
                <td>Favorite animal:</td>
                <td>{user.image}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{`8 ${user.phone}`}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <p>
              <b>Favorite phrase:</b>
            </p>
            <span>{user.phrase}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveUser
