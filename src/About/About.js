import React, { useContext } from 'react'
import { GithubContext } from '../contexts/GithubContext'

import './About.css'

export default function About() {

  const data = useContext(GithubContext)
  
  return (
    <div className="About">
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
      <div className="text-container">
        <h1>Clifton Hodges</h1>
        <h2>( Developer  &&  Designer )</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Impedit fugiat provident cumque voluptatem nobis placeat distinctio, possimus inventore aut odit reiciendis enim non quis.</p>
        <p> Quos a officia obcaecati sunt natus!</p>
        <div>will put my github contributions here</div>
      </div>
    </div> 
  )
}
