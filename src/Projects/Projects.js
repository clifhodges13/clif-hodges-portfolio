import React, { useEffect } from 'react'
import axios from 'axios'

import './Projects.css'

export default function Projects() {
  
  // useEffect(() => {
  //   axios.get('https://api.github.com/users/clifhodges13')
  //     .then(res => {
  //       return res
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <div className="Projects">
      Projects component
      
      This component will contain 3-5 of my best projects as
      a thumbnail. When hovered, it grows a little, and a quick
      title/description will appear over the image. When clicked,
      the component renders to fill the page (popup style) with
      the project that was clicked.
    </div>
  )
}