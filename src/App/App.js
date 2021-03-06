import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GithubContext } from '../contexts/GithubContext'
import { Route } from 'react-router-dom'
import Welcome from '../Welcome/Welcome'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Nav from '../Nav/Nav'

import logo from '../assets/logo.png'
import './App.css'

function App() {

  const [data, setData] = useState();
  const [error, setError] = useState(false);

  console.log(data)

  useEffect(() => {
    axios.get('https://api.github.com/users/clifhodges13')
      .then(res => setData(res.data))
      .catch(err => setError(err))
  }, []);

  return(
    <div className="App">

      <div className="Logo">
        <img src={logo} alt={logo} />
      </div>
    
      <GithubContext.Provider value={data}>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/about' component={About} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/projects' component={Projects} />
      </GithubContext.Provider>

      {error && <h3>There was an error connecting to github.</h3>}
      <Nav />
    </div>
  )
}

export default App
