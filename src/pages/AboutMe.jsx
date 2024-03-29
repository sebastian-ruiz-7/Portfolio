//Import dependencies
import React from 'react'
//Import components
import { Header } from '@containers/Header/Header'
//Import assets
import aboutMeImage from '@assets/about-me-image.jpg'
//Import styles
import './AboutMe.css'

export const AboutMe = () => {
  return (
    <>
      <Header />

      <main className='main-about-me'>
        
        <figure>
          <img className='about-me-image' src={aboutMeImage} alt="My pitcture" />
        </figure>

        <div className='about-me-description-container'>
          <div className='about-me-description'>
            <h1>About Me</h1>
            <p className='about-me__text'>
              My name is Alexis Sebastián Ruiz Álvarez. I'm 22 years old. 
              I'm very proactive and self-taught person, in addition I'm a enthusiastic of the tech industry, 
              so I'd like to contribute with my skills at the development of web projects.
              <br />
              I have one year of experience as a FullStack Developer. 
              I've worked with a restaurant in the process of building an web application fot theirs needs.
              <br />
              My favorites technologies in the world of the web development are React for the FrontEnd and NodeJS with Express in the BackEnd.
              <br />
              That's why I'm looking to collaborate with teams to create digital products that have a huge impact in the life of users

            </p>

          </div>

          <div className='tech-skills-container'>
            <h1 className='tech-skills__title'>Technical Skills</h1>
            <div className='programming-languages-container'>
              <span className='skill__title'>Programming Languages</span>
              <ul className='skill__list'>
                <li className='skill__item'>JavaScript</li>
              </ul>

            </div>

            <div className='frontend-backend-container'>
                <div className='skill-container'>
                  <span className='skill__title'>FrontEnd</span>
                  <ul className='skill__list'>
                    <li className='skill__item'>Html</li>
                    <li className='skill__item'>CSS</li>
                    <li className='skill__item'>React</li>
                    <li className='skill__item'>JS</li>
                    <li className='skill__item'>Babel</li>
                    <li className='skill__item'>Webpack</li>
                  </ul>
                </div>

                <div className='skill-container'>
                  <span className='skill__title'>BackEnd</span>
                  <ul className='skill__list'>
                    <li className='skill__item'>Node JS</li>
                    <li className='skill__item'>WebSockets</li>
                    <li className='skill__item'>API Rest</li>
                    <li className='skill__item'>MySQL</li>
                    <li className='skill__item'>Express</li>
                    <li className='skill__item'>Postman</li>
                  </ul>
                </div>

            </div>


          </div>

          <button onClick={()=>{location.href='/projects'}} className='go-to-projects-button'>Projects</button>

<<<<<<< HEAD
          <a className='link-to-cv' href="https://firebasestorage.googleapis.com/v0/b/portfolio-6af0e.appspot.com/o/Curriculum%20Nube.pdf?alt=media&token=832303d3-8cde-44a8-882d-04791b810c91" target="_blank"><button className='go-to-projects-button'>CV</button></a>
=======
          <a className='link-to-cv' href="https://firebasestorage.googleapis.com/v0/b/portfolio-6af0e.appspot.com/o/Curriculum%20Nube.pdf?alt=media&token=f40dd066-1775-4aaa-ae9e-aaf87436ed0f" target="_blank"><button className='go-to-projects-button'>CV</button></a>
>>>>>>> fe410231f981fa373dc8e45ade939c4289c168a0
          
        </div>


      </main>
    </>
  )
}
