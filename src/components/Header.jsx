import React from 'react'
import logo from '../images/react.svg'

const Header = () => {
  return (
    <div className="container-fluid rc-intro">
      <div className="container">
        <img className="rc-img" src={logo} alt="React" width="50"  height="45" />
        <h1 className="rc-title">React Challenge</h1>
        <p className="rc-description">Сортировка и поиск данных</p>
      </div>
    </div>
  )
}

export default Header
