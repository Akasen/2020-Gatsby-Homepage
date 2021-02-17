import React from "react"
import { Link } from "gatsby"
import profile from "../images/profile.jpg"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="profilepic" src={profile} alt="Myself" />
      </Link>
      <ul class="navlinks">
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <a href="https://github.com/akasen" target="noopener noreferrer">
            Github
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
