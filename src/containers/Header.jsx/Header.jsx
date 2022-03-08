//Import dependencies
import React from 'react'
//Import components
import { InitialLogo } from '@components/InitialsLogo/InitialLogo';
import { NavigationMenu } from '@components/NavigationMenu/NavigationMenu';
//Import assets
import hamMenu from '@assets/menu.png'
//Import styles
import './Header.css'
import { HamMenu } from '@components/HamMenu/HamMenu';

export const Header = () => {
  return (
    <header className='header-container'>

        <InitialLogo className='initial-logo'/>

        <NavigationMenu className='navigation-menu'/>

        <div className='center-navigation-menu'></div>

        <HamMenu />

        {/* <img className='ham-menu-image' src={hamMenu} alt="" /> */}

    </header>    
  )
}
