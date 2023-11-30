import React from 'react'
import Logo from '../assets/mon_avatar.webp';

export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate logo" />
            <span>Taskmate</span>
        </div>
        <div className="themeSelector">
            <span className="light"></span>
            <span className="medium"></span>
            <span className="dark"></span>
        </div>
    </header>
  )
}
