//Import dependencies
import React from 'react'

import github from '@assets/github.svg'
//Import styles
import './ProjectCard.css'

export const ProjectCard = ({title,description,image,link}) => {
  return (
    <div className='project-card-container'>
        <h1 className='project__title'>{title}</h1>

        <figure>
            <img className='project__image' src={image} alt="" />
        </figure>

        <p className='project__description'>{description}</p>

        <a href={link} target="_blank"  className='project-repo-button'>
            <p>GitHub</p>
            <img className='github-icon' src={github} alt="GitHub Icon" />
        </a>

    </div>
  )
}
