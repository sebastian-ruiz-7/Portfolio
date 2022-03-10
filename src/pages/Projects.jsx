//Import dependencies
import React from 'react'
//Import containers
import { Header } from '@containers/Header/Header'
import { ProjectCard } from '@containers/ProjectCard/ProjectCard'
//Import assets
import portfolio from '@assets/portfolioImage.png'
import mariscos from '@assets/mariscosImage.png'
import phoneBook from '@assets/phoneBookImage.png'
//Import styles
import './Projects.css'

export const Projects = () => {
  return (
    <>
      <Header />
      
      <main className='main-projects'>

        <ProjectCard title='Mariscos Pacífico app' link={'https://github.com/sebastian-ruiz-7/Mariscos-Pacifico'} image={mariscos} description={'This is a web app for a restaurant. You can take orders, update orders, get tickets, see the not yet delivered dishes. All in real time with Web Sockets, and more.'}/>

        <ProjectCard title='PhoneBook' link={'https://github.com/sebastian-ruiz-7/PhoneBook'} image={phoneBook} description={'This is a web app where you can handle your phone contacts through a digital phoneBook'}/>

        <ProjectCard title='My portfolio' link={'https://github.com/sebastian-ruiz-7/Portfolio'} image={portfolio} description={'This is a site where you can see my last projects and get to know me a little better'}/>

      </main>
    </>
  )
}
