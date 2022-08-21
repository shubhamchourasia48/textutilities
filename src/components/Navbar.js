import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({title, aboutText, mode, toggle}) => {
  return (
   <>
   <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid ms-5">
    <Link className="navbar-brand" to="/">{title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{aboutText}</Link>
        </li>
      </ul>
    </div>
  <div className={`form-check form-switch me-5 text-${mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={toggle} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
  </div>
</div>
</nav>
   </>
  )
}

Navbar.propTypes = {
                title: PropTypes.string,
                // title: PropTypes.string.isRequired,
              // ---shows a warning 
                aboutText: PropTypes.string
}

// default props

Navbar.defaultProps={
          title: "Set Title Here",
          
}
export default Navbar