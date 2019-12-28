import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <NavLink to='/' >About</NavLink>
      <NavLink to='/skills' >Skills</NavLink>
      <NavLink to='/projects' >Projects</NavLink>
    </div>
  )
}
