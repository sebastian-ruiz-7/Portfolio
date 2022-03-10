//Import dependencies
import React from 'react';
//Import containers
import { Header } from '@containers/Header/Header';
//Import assets
import programador from '@assets/programmer.png'
import flowers from '@assets/flores.svg'
//Import styles
import './Home.css'

const Home = () => {

  return (
    <>
      <Header />

      <main className='main-home'>

        <figure>
          <img className='programmer-image' src={programador} alt="Programmer image" />
        </figure>

      <div className='who-am-i-container'>
        <h1 className='home-text name'>Hi! My name is<br /><strong >ALEXIS SEBASTIÁN RUIZ ÁLVAREZ</strong> </h1>

        <p className='home-text'>I'm a Fullstack Developer with great passion to create digital products. Ready to colaborate in new web projects</p>

        <button onClick={()=>location.href='/about-me'} className='home-button'>About Me</button>


      </div>
      </main>

      <figure>
        <img className='flowers-image' src={flowers} alt="decoration image" />
      </figure>

      
    </>
  );
};

export {Home};