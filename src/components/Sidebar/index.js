import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoM from '../../assets/images/logo-home.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoM} alt="Logo" />
          {/* <img className="sub-logo" src={LogoSubtitle} alt="Logo Subtitle" /> */}
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/about">
            <FontAwesomeIcon icon={faUser} className="about-link" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} className="contact-link" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/madhusudhan-reddy-2956271a3/"
              className="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Executioner769"
              className="github"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/madhuman1012/"
              className="instagram"
            >
              <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
