//Import dependencies
import React from 'react'
//Import styles
import './InitialLogo.css'

export const InitialLogo = () => {
  return (
    <h1 onClick={()=>location.href='/'} className='initials-logo'>SR</h1>
  )
}
