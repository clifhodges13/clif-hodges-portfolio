import React, { useContext } from 'react'
import { GithubContext } from '../contexts/GithubContext'

import './Welcome.css'

export default function Welcome() {

  const data = useContext(GithubContext)

  return (
    <div className="Welcome">
      <div className="headshot">
        {data ? 
          <img  
            src={ data.avatar_url } 
            alt="Clifton Hodges Github Headshot"/>
          : 
          <img 
            className="blur" 
            src="http://www.performancecomms.com/wp-content/uploads/2018/06/anonymous-headshot.png" 
            alt="Clifton Hodges Github Headshot"/>
        }
      </div>
      <h1>Clifton Hodges</h1>
      <h2>Web Developer</h2>
      <p>with a background in Design</p>
    </div>
  )
}
