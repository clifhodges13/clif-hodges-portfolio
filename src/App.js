import React from 'react'
import logo from './assets/logo.png'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'

import './App.css'

function App() {
  return(
    <div className="container">
    <img src={ logo } alt="logo"/>
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
