import React from 'react'
import './index.scss'

function Contact() {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
        </div>
      </div>
    </>
  )
}

export default Contact

/* 
<div className="contact-form">
          <form>
            <ul>
              <li className="half">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
              </li>
              <li className="half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  className="flat-button"
                  value="Send Message"
                />
              </li>
            </ul>
          </form>
        </div>
*/
