import React from 'react';
import { Link } from 'react-router-dom'

function Projects(){
  return (
    /* */
    <div className="flex flex-col">
      <div className="project_box">
        <h3>PopcornFlix: Movie app</h3>
        <p>Purpose: To introduces movies in the market with descriptions, trailer, actors, and production information.</p>
        <ul>
          <li>Front-end: HTML5, CSS3, JavaScript, ReactJS, Netlify</li>
          <li>Back-end: MovieDB API</li>
          <li>Deployment: Netlify</li>
        </ul>
        <div className="mt-2 py-2 px-4">
          <a className="btn-primary" target="_blank" href="https://nervous-einstein-2a25d7.netlify.app/">Preview</a>
        </div>
      </div>
      <div className="project_box">
        <h3>EnoWarehouse: Database app</h3>
        <p>Purpose: To demonstrate that I can build CRUD (Create, Read, Update, Delete) app that saves data in MongoDB Atlas (Cloud NoSQL Database).</p>
        <ul>
          <li>Front-end: HTML5, CSS3, JavaScript, Pug</li>
          <li>Back-end: ExpressJS, NodeJS, MongoDB, MongoDB Atlas</li>
          <li>Deployment: Heroku</li>
        </ul>
        
        <div className="mt-2 py-2 px-4">
          <a className="btn-primary" target="_blank" href="https://enowarehouse.herokuapp.com/">Preview</a>
        </div>
      </div>
    </div>
  )
}

export default Projects;