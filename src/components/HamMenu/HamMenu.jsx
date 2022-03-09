//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import styles
import './HamMenu.css'

export const HamMenu = () => {

  const {openModal} = React.useContext(AppContext);

  return (
    <div onClick={()=>openModal(prev=>!prev)} className='ham-menu-container'>
        <div className='ham-menu__line'></div>
        <div className='ham-menu__line'></div>
        <div className='ham-menu__line'></div>
    </div>
  )
}
