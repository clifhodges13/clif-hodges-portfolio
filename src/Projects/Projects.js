import React from 'react'

import './Projects.css'

export default function Projects() {

  return (
    <div className="Projects">
      <section>
        <div>
          <h2>Design Your Life -- <span>Web App, Front End Engineer</span></h2>
          <p>Design Your Life is a targeted CRUD application that allows users to add new activities to their daily lives and optimize through a rating system and insights component via tracking metrics. Add, track, and discover your best self. Built with React.js, React Router, Axios, React Dom, Styled Components, Express, Helmet, Jest, & Sqlite3.</p>
          <div className="icon-container">
            <a target="_blank" rel="noopener noreferrer" href='https://dyl.netlify.com/'><i class="fas fa-globe"></i></a>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/Lambda-Labs-PT-Design-Your-Life/React-Front-End/tree/demo'><i class="fab fa-github"></i></a>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>Movie Database -- <span>Web App, Front End Engineer</span></h2>
          <p>A searchable movie database app using the OMDb api. Built using React, React Router, Styled-components, and hooks.</p>
          <div className="icon-container">
            <a target="_blank" rel="noopener noreferrer" href='https://movie-database-react.netlify.com'><i class="fas fa-globe"></i></a>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/clifhodges13/movie-database'><i class="fab fa-github"></i></a>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>Youtube Player -- <span>Web App, Front End Engineer</span></h2>
          <p>A homemade, vanilla JS  Youtube RSS feed which consumes the Youtube API and displays a feed of videos from a Youtube playlist.</p>
          <div className="icon-container">
            <a target="_blank" rel="noopener noreferrer" href='https://youtube-rss.netlify.com'><i class="fas fa-globe"></i></a>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/clifhodges13/youtube-rss'><i class="fab fa-github"></i></a>
          </div>
        </div>
      </section>
    </div>
  )
}