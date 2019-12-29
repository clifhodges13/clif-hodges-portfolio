import React from 'react'
import { NavLink } from 'react-router-dom'
// stylesheet
import './Nav.css'

export default function Nav() {
  return (
    <div className="Nav">
      <NavLink to='/about' className="Nav-link" activeClassName="Nav-active">About</NavLink>
      <NavLink to='/skills' className="Nav-link" activeClassName="Nav-active">Skills</NavLink>
      <NavLink to='/projects' className="Nav-link" activeClassName="Nav-active">Projects</NavLink>
    </div>
  )
}
