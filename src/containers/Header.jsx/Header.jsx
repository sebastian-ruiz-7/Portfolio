//Import dependencies
import React from 'react'
//Import components
import { InitialLogo } from '@components/InitialsLogo/InitialLogo';
import { NavigationMenu } from '@components/NavigationMenu/NavigationMenu';
import { HamMenu } from '@components/HamMenu/HamMenu';
import { Modal } from '@containers/Modal/Modal';
import { NavMenuModal } from '@components/NavMenuModal/NavMenuModal';
//Import Context
import { AppContext } from '@context/AppContext'
//Import styles
import './Header.css'

export const Header = () => {

  const {modal} = React.useContext(AppContext);
  
  return (
    <header className='header-container'>

        <InitialLogo/>

        <NavigationMenu/>

        <div className='center-navigation-menu'></div>

        <HamMenu />

        {modal && <Modal>
          <NavMenuModal />
        </Modal>}

    </header>    
  )
}
