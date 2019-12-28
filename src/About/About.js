import React, { useContext } from 'react'
import { GithubContext } from '../contexts/GithubContext'

export default function About() {

  const data = useContext(GithubContext)
  
  return (
    <div className="about-container">
      {data && <img src={ data.avatar_url } alt="logo"/>}
      <div className="text-container">This will contain a short introduction to who I am,
      and what my dreams and aspirations are</div>
    </div> 
  )
}
