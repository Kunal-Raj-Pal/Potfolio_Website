import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
     {/* ---------------------------------------Nav Start--------------------------------------- */}
     <div id="nav">
        <a id="navname" href="/">
          Kunal Raj Pal
        </a>
        <ul>
          <li>
            <Link to="/" className="hanch">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/kunal-raj-pal">Linkdin</Link>
          </li>
          <li>
            <button>
              <Link id="contact-btn" className="c" to="/contact/">
                Contact
              </Link>
            </button>
          </li>
        </ul>
      </div>
      {/* ---------------------------------------Nav End--------------------------------------- */}
    </>
  )
}

export default Nav