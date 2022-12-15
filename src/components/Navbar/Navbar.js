import React from 'react'
import { images } from '../../constants'

const Navbar = () => {
  return (
    <div>
      <nav className="main_navbar">
      <div className="logo">
        <img src={images.profilealt} alt="profile" />
      </div>
      <ul className="navlinks">
        {['About', 'Skills', 'Work', 'Contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}> 
          <div />
          <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

        
          </nav>
    </div>
  )
}

export default Navbar
