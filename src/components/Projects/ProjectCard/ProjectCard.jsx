import React from 'react'
import './ProjectCard.css'



const ProjectCard = ({details}) => {
  let url = details.url 
  return (
    <div className="project-card">
        <h6>{details.title}</h6>
        
        <div className="url"> <a href={url} target='_blank' rel="noreferrer" >Click to Visit GitHub Repository</a></div>

        <ul>
            {details.description.map((item) => ( 
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ProjectCard
