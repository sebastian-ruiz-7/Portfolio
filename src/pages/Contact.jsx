//Import dependencies
import React from 'react'
//Import containers
import { Header } from '@containers/Header/Header'
//Import assets
import linkedin from '@assets/linkedin.svg'
import github from '@assets/github.svg'
import email from '@assets/email.svg'
//Import styles
import './Contact.css'

export const Contact = () => {
  return (
    <>
      <Header />

      <main className='main-coctact'>
        <form action='https://formspree.io/f/mnqwvypj' method='POST' className='form-container'>
          <div className='social-media-container'>
            <a href="https://www.linkedin.com/in/alexis-sebasti%C3%A1n-ruiz-%C3%A1lvarez-a15a6a204/" target="_blank"><img className='social-media-icon' src={linkedin} alt="LinkedIn Icon" /></a>
            <a href="https://github.com/sebastian-ruiz-7" target="_blank"><img className='social-media-icon' src={github} alt="Github Icon" /></a>
            <a href="mailto: sebastianruizalvarez@gmail.com" target="_blank"><img className='social-media-icon' src={email} alt="Email Icon" /></a>
          </div>

          <input className='form__input input__name' type="text" name='name' required placeholder='Name' />

          <input className='form__input input__email' type="email" name='email' required placeholder='Email' />

          <textarea className='form__input input__message' type="text" name='message' required placeholder='Message' />

          <button type='submit' className='submit-button'>Send</button>

        </form>
      </main>
    </>
  )
}
