//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import styles
import './NavMenuModal.css'

export const NavMenuModal = () => {
    
  const {openModal} = React.useContext(AppContext);

  return (
    <div onClick={()=>openModal(prev=>!prev)} className='modal-nav-container'>
          <p className='modal-nav__close'>X</p>
          <p onClick={()=>location.href='/'} className='modal-nav__text'>Home</p>
          <p onClick={()=>location.href='/about-me'} className='modal-nav__text'>About Me</p>
          <p onClick={()=>location.href='/projects'} className='modal-nav__text'>Projects</p>
          <p onClick={()=>location.href='/contact'} className='modal-nav__text'>Contact</p>
    </div>
  )
}
