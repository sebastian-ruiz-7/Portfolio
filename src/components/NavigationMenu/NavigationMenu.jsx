//Import dependencies
import React from 'react'
//Import styles
import './NavigationMenu.css'

export const NavigationMenu = () => {
  return (
    <nav className='nav-container'>
      <ul className='nav__ul'>
        <li className='nav__li'>Home</li>
        <li className='nav__li'>About Me</li>
        <li className='nav__li'>Projects</li>
        <li className='nav__li'>Contact</li>
      </ul>
    </nav>
  )
}
