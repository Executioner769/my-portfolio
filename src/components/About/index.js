import React from 'react'
import './index.scss'
import MadhuImage from '../../assets/images/Madhu.jpg'
// import Loader from 'react-loaders'

function About() {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About Me</h1>
          <p>
            I'm very ambitious Full-Stack Developer looking for a role in
            established organization where I can contribute my skills and
            knowledge to the growth of the organization.
          </p>
          <p>
            I'm a self-taught developer with a passion for learning new
            technologies and building things. I am a quick learner and a team
            player.
          </p>
          <p>
            If I need to define myself in one sentence that would be naturally
            introvert, selectively extrovert, photography enthusiast, casual
            gammer, Lalisa of Blackpink fan.
          </p>
        </div>
        <div className="image-zone">
          <img src={MadhuImage} alt="Madhusudhan Reddy" />
        </div>
      </div>
      {/* <Loader type="ball-pulse" /> */}
    </>
  )
}

export default About
