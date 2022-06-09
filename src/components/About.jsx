import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div style={{padding: '20px 40px'}}>
        <h1>About company</h1>
        <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default About