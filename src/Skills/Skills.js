import React from 'react'

import './Skills.css'

export default function Skills() {
  return (
    <div className="Skills-wrapper">
      <div className="Skills">
        <section className="list-container">
          <h2>Development</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Express</li>
            <li>SASS / SCSS / LESS</li>
            <li>KnexJS</li>
          </ul>
        </section>
        <section className="list-container">
          <h2>Design</h2>
          <ul>
            <li>UI</li>
            <li>Adobe Suite</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Responsive Web Design</li>
            <li>Web Application Design</li>
            <li>Logo Design</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
