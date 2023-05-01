import React, { useState } from 'react'
import '../navbar.css'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi';
const Navbar = () => {

  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(true);

  return (
    <>
      <nav className="nav">
        <button className="btn btn-title"><a className="site-title" href="/">Afiya</a></button>

        <div onClick={handleClick} className="nav-icon">
          {open ? <FiX /> : <FiMenu />}
        </div>

        <ul className={open ? 'nav-links active' : 'nav-links'}>
          <button onClick={closeMenu}  className="btn home">
           <li> <Link className="nav-link" to="/">Home</Link></li>
          </button>

          <button onClick={closeMenu}  className="btn about">
           <li> <Link className='nav-link' to="/About">About</Link></li>
          </button>

          <button onClick={closeMenu} className="btn portfolio">
          <li><Link className="nav-link" to="/Portfolio">Portfolio</Link></li></button>

          <button onClick={closeMenu} className="btn skills">
          <li> <Link className="nav-link" to="/Skills">Skills</Link></li></button>

          <button onClick={closeMenu} className="btn contact">
          <li><Link className="nav-link" to="/Contact">Contact</Link></li></button>
        </ul>
      </nav>
    </>
  )
}

export default Navbar