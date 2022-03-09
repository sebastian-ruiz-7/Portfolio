//Import dependencies
import React from 'react'
//Import styles
import './NavigationMenu.css'

export const NavigationMenu = () => {
  return (
    <nav className='nav-container'>
      <ul className='nav__ul'>
        <li onClick={()=>{location.href='/'}} className='nav__li'>Home</li>
        <li onClick={()=>{location.href='/about-me'}} className='nav__li'>About Me</li>
        <li onClick={()=>{location.href='/projects'}} className='nav__li'>Projects</li>
        <li onClick={()=>{location.href='/contact'}} className='nav__li'>Contact</li>
      </ul>
    </nav>
  )
}
