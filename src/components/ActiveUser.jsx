import React from 'react'
import images from '../data/images'

const ActiveUser = props => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4">
      <div className="thumbnail">
        <img src={images[props.user.image]} alt=""/>
        <div className="thumbnail-caption">
          <h3>{props.user.name}</h3>
          <table className="user-info table table-responsive">
            <tbody>
              <tr>
                <td>Age:</td>
                <td>{props.user.age}</td>
              </tr>
              <tr>
                <td>Favorite animal:</td>
                <td>{props.user.image}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{`8 ${props.user.phone}`}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <p>
              <b>Favorite phrase:</b>
            </p>
            <span>{props.user.phrase}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveUser
