import React from 'react'
import './index.scss'
import MImage from '../../assets/images/logo-home.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br />
          I'm Madhu
          <br />
          Web Developer
        </h1>
        <h2>React / JavaScript / Devops</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
      <div className="image-zone">
        <img src={MImage} alt="M Logo" />
      </div>
    </div>
  )
}

export default Home
